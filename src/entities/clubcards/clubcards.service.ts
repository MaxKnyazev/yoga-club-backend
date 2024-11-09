import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { supabase } from 'src/supabase';
import { Yoga_clubcards } from './models/clubcards.model';
import { clubcardsConst } from './clubcards.const';
import { ResGetAllClubcardsDto } from './dto/res-get-all-clubcards.dto';
import { ResGetOneClubcardDto } from './dto/res-get-one-clubcard.dto';
import { CreateClubcardDto } from './dto/create-clubcard.dto';
import { ResPutClubcardDto } from './dto/res-put-clubcard.dto';
import { ResCreateClubcardDto } from './dto/res-create-clubcard.dto';

@Injectable()
export class ClubcardsService {
  constructor( @InjectModel(Yoga_clubcards) private readonly yogaClubcardsModel: typeof Yoga_clubcards ) {}

  async findAll(): Promise<ResGetAllClubcardsDto> {
    try {
      const clubcards = await this.yogaClubcardsModel.findAll();
      return {
        result: clubcards,
        error: '',
      }; 
    } catch(err) {
      return {
        result: null,
        error: clubcardsConst.ERROR_GET_ALL_CLUBCARDS + `${err}`,
      }
    }
  }

  async findOne(id: string): Promise<ResGetOneClubcardDto> {
    try {
      const clubcard = await this.yogaClubcardsModel.findOne({
        where: {
          card_id: id,
        },
      });
      return {
        result: clubcard,
        error: '',
      }
    } catch (err) {
      return {
        result: null,
        error: clubcardsConst.ERROR_FIND_ONE_CLUBCARD + `${err}`,
      }
    }
  }

  async update(id: string, createClubcardDto: CreateClubcardDto): Promise<ResPutClubcardDto>{
    try {
      const clubcard = await this.yogaClubcardsModel.update(createClubcardDto, {
        where: { 
          card_id: id, 
       }
      });
      return {
        result: clubcard,
        error: '',
      }
    } catch (err) {
      return {
        result: null,
        error: clubcardsConst.ERROR_PUT_CLUBCARD + `${err}`,
      }
    } 
  }

  async create(createClubcardDto: CreateClubcardDto): Promise<ResCreateClubcardDto> {
    try {
      const { data, error } = await supabase.rpc('add_yoga_clubcard', {...createClubcardDto});
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
        error: clubcardsConst.ERROR_CREATE_CLUBCARD + `${err}`,
      }
    }
  }

  async remove(id: string): Promise<ResCreateClubcardDto> {
    try {
      const { data, error } = await supabase.rpc('delete_yoga_clubcard', {'id': +id});
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
        error: clubcardsConst.ERROR_DELETE_CLUBCARD + `${err}`,
      }
    }
  }

}
