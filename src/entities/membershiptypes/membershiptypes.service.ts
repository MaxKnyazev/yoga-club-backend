import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { supabase } from 'src/supabase';
import { Yoga_membershiptypes } from './models/membershiptypes.model';
import { membershiptypesConst } from './membershiptypes.const';
import { ResGetAllMembershiptypesDto } from './dto/res-get-all-membershiptypes.dto';
import { ResGetOneMembershiptypeDto } from './dto/res-get-one-membershiptype.dto';
import { ResPutMembershiptypeDto } from './dto/res-put-membershiptype.dto';
import { CreateMembershiptypeDto } from './dto/create-membershiptype.dto';
import { ResCreateMembershiptypeDto } from './dto/res-create-membershiptype.dto';

@Injectable()
export class MembershiptypesService {
  constructor( @InjectModel(Yoga_membershiptypes) private readonly yogaMembershiptypesModel: typeof Yoga_membershiptypes ) {}

  async findAll(): Promise<ResGetAllMembershiptypesDto> {
    try {
      const membershiptypes = await this.yogaMembershiptypesModel.findAll();
      return {
        result: membershiptypes,
        error: '',
      }; 
    } catch(err) {
      return {
        result: null,
        error: membershiptypesConst.ERROR_GET_ALL_MEMBERSHIPTYPES + `${err}`,
      }
    }
  }

  async findOne(id: string): Promise<ResGetOneMembershiptypeDto> {
    try {
      const membershiptype = await this.yogaMembershiptypesModel.findOne({
        where: {
          type_id: id,
        },
      });
      return {
        result: membershiptype,
        error: '',
      }
    } catch (err) {
      return {
        result: null,
        error: membershiptypesConst.ERROR_FIND_ONE_MEMBERSHIPTYPE + `${err}`,
      }
    }
  }

  async update(id: string, createMembershiptypeDto: CreateMembershiptypeDto): Promise<ResPutMembershiptypeDto>{
    try {
      const membershiptype = await this.yogaMembershiptypesModel.update(createMembershiptypeDto, {
        where: { 
          type_id: id, 
       }
      });
      return {
        result: membershiptype,
        error: '',
      }
    } catch (err) {
      return {
        result: null,
        error: membershiptypesConst.ERROR_PUT_MEMBERSHIPTYPE + `${err}`,
      }
    } 
  }

  async create(createMembershiptypeDto: CreateMembershiptypeDto): Promise<ResCreateMembershiptypeDto> {
    try {
      const { data, error } = await supabase.rpc('add_yoga_membershiptype', {...createMembershiptypeDto});
      if (error) {
        throw new Error(JSON.stringify(error));
      }
      return {
        result: data,
        error: JSON.stringify(error),
      }
    } catch(err) {
      return {
        result: null,
        error: membershiptypesConst.ERROR_CREATE_MEMBERSHIPTYPE + `${err}`,
      }
    }
  }

  async remove(id: string): Promise<ResCreateMembershiptypeDto> {
    try {
      const { data, error } = await supabase.rpc('delete_yoga_membershiptype', {'id': +id});
      if (error) {
        throw new Error(JSON.stringify(error));
      }
      return {
        result: data,
        error: JSON.stringify(error),
      }
    } catch(err) {
      return {
        result: null,
        error: membershiptypesConst.ERROR_DELETE_MEMBERSHIPTYPE + `${err}`,
      }
    }
  }

}