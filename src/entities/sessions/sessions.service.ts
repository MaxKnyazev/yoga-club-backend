import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { supabase } from 'src/supabase';
import { Yoga_sessions } from './models/sessions.model';
import { sessionsConst } from './sessions.const';
import { ResCreateSessionDto } from './dto/res-create-session.dto';
import { CreateSessionDto } from './dto/create-session.dto';
import { ResPutSessionDto } from './dto/res-put-session.dto';
import { ResGetOneSessionDto } from './dto/res-get-one-session.dto';
import { ResGetAllSessionsDto } from './dto/res-get-all-sessions.dto';

@Injectable()
export class SessionsService {
  constructor( @InjectModel(Yoga_sessions) private readonly yogaSessionsModel: typeof Yoga_sessions ) {}

  async findAll(): Promise<ResGetAllSessionsDto> {
    try {
      const sessions = await this.yogaSessionsModel.findAll();
      return {
        result: sessions,
        error: '',
      }; 
    } catch(err) {
      return {
        result: null,
        error: sessionsConst.ERROR_GET_ALL_SESSIONS + `${err}`,
      }
    }
  }

  async findOne(id: string): Promise<ResGetOneSessionDto> {
    try {
      const session = await this.yogaSessionsModel.findOne({
        where: {
          session_id: id,
        },
      });
      return {
        result: session,
        error: '',
      }
    } catch (err) {
      return {
        result: null,
        error: sessionsConst.ERROR_FIND_ONE_SESSION + `${err}`,
      }
    }
  }

  async update(id: string, createSessionDto: CreateSessionDto): Promise<ResPutSessionDto>{
    try {
      const session = await this.yogaSessionsModel.update(createSessionDto, {
        where: { 
          session_id: id, 
      }
      });
      return {
        result: session,
        error: '',
      }
    } catch (err) {
      return {
        result: null,
        error: sessionsConst.ERROR_PUT_SESSION + `${err}`,
      }
    } 
  }

  async create(createSessionDto: CreateSessionDto): Promise<ResCreateSessionDto> {
    try {
      const { data, error } = await supabase.rpc('add_yoga_session', {...createSessionDto});
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
        error: sessionsConst.ERROR_CREATE_SESSION + `${err}`,
      }
    }
  }

  async remove(id: string): Promise<ResCreateSessionDto> {
    try {
      const { data, error } = await supabase.rpc('delete_yoga_session', {'id': +id});
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
        error: sessionsConst.ERROR_DELETE_SESSION + `${err}`,
      }
    }
  }

}
