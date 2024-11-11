import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { supabase } from 'src/supabase';
import { Yoga_memberships } from './models/memberships.model';
import { membershipsConst } from './memberships.const';
import { ResCreateMembershipDto } from './dto/res-create-membership.dto';
import { CreateMembershipDto } from './dto/create-membership.dto';
import { ResPutMembershipDto } from './dto/res-put-membership.dto';
import { ResGetOneMembershipDto } from './dto/res-get-one-membership.dto';
import { ResGetAllMembershipsDto } from './dto/res-get-all-memberships.dto';

@Injectable()
export class MembershipsService {
  constructor( @InjectModel(Yoga_memberships) private readonly yogaClubcardsModel: typeof Yoga_memberships ) {}

  async findAll(): Promise<ResGetAllMembershipsDto> {
    try {
      const memberships = await this.yogaClubcardsModel.findAll();
      return {
        result: memberships,
        error: '',
      }; 
    } catch(err) {
      return {
        result: null,
        error: membershipsConst.ERROR_GET_ALL_MEMBERSHIPS + `${err}`,
      }
    }
  }

  async findOne(id: string): Promise<ResGetOneMembershipDto> {
    try {
      const membership = await this.yogaClubcardsModel.findOne({
        where: {
          memberships_id: id,
        },
      });
      return {
        result: membership,
        error: '',
      }
    } catch (err) {
      return {
        result: null,
        error: membershipsConst.ERROR_FIND_ONE_MEMBERSHIP + `${err}`,
      }
    }
  }

  async update(id: string, createMembershipDto: CreateMembershipDto): Promise<ResPutMembershipDto>{
    try {
      const membership = await this.yogaClubcardsModel.update(createMembershipDto, {
        where: { 
          memberships_id: id, 
      }
      });
      return {
        result: membership,
        error: '',
      }
    } catch (err) {
      return {
        result: null,
        error: membershipsConst.ERROR_PUT_MEMBERSHIP + `${err}`,
      }
    } 
  }

  async create(createMembershipDto: CreateMembershipDto): Promise<ResCreateMembershipDto> {
    try {
      const { data, error } = await supabase.rpc('add_yoga_membership', {...createMembershipDto});
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
        error: membershipsConst.ERROR_CREATE_MEMBERSHIP + `${err}`,
      }
    }
  }

  async remove(id: string): Promise<ResCreateMembershipDto> {
    try {
      const { data, error } = await supabase.rpc('delete_yoga_membership', {'id': +id});
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
        error: membershipsConst.ERROR_DELETE_MEMBERSHIP + `${err}`,
      }
    }
  }

}
