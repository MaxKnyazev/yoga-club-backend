import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCardtypeDto } from './dto/create-cardtype.dto';
import { Yoga_cardtypes } from './models/cardtypes.model';
import { cardtypesConst } from './cardtypes.const';
import { ResGetAllCardtypesDto } from './dto/res-get-all-cardtypes.dto';
import { ResGetOneCardtypeDto } from './dto/res-get-one-cardtype.dto';
import { ResPutCardtypeDto } from './dto/res-put-cardtype.dto';
import { supabase } from 'src/supabase';
import { ResCreateCardtypeDto } from './dto/res-create-cardtype.dto';

@Injectable()
export class CardtypesService {
  constructor( @InjectModel(Yoga_cardtypes) private readonly yogaCardtypesModel: typeof Yoga_cardtypes ) {}

  async findAll(): Promise<ResGetAllCardtypesDto> {
    try {
      const cardtypes = await this.yogaCardtypesModel.findAll();
      return {
        result: cardtypes,
        error: '',
      }; 
    } catch(err) {
      return {
        result: null,
        error: cardtypesConst.ERROR_GET_ALL_CARDTYPES + `${err}`,
      }
    }
  }

  async findOne(id: string): Promise<ResGetOneCardtypeDto> {
    try {
      const cardtype = await this.yogaCardtypesModel.findOne({
        where: {
          card_type_id: id,
        },
      });
      return {
        result: cardtype,
        error: '',
      }
    } catch (err) {
      return {
        result: null,
        error: cardtypesConst.ERROR_FIND_ONE_CARDTYPE + `${err}`,
      }
    }
  }

  async update(id: string, createCardtypeDto: CreateCardtypeDto): Promise<ResPutCardtypeDto>{
    try {
      const cardtype = await this.yogaCardtypesModel.update(createCardtypeDto, {
        where: { 
          card_type_id: id, 
       }
      });
      return {
        result: cardtype,
        error: '',
      }
    } catch (err) {
      return {
        result: null,
        error: cardtypesConst.ERROR_PUT_CARDTYPE + `${err}`,
      }
    } 
  }

  async create(createCardtypeDto: CreateCardtypeDto): Promise<ResCreateCardtypeDto> {
    try {
      const { data, error } = await supabase.rpc('add_yoga_cardtype', {...createCardtypeDto});
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
        error: cardtypesConst.ERROR_CREATE_CARDTYPE + `${err}`,
      }
    }
  }

  async remove(id: string): Promise<ResCreateCardtypeDto> {
    try {
      const { data, error } = await supabase.rpc('delete_yoga_cardtype', {'id': +id});
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
        error: cardtypesConst.ERROR_DELETE_CARDTYPE + `${err}`,
      }
    }
  }

}
