import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { supabase } from './../../supabase';
import { Yoga_clients } from './models/client.model';
import { CreateClientDto } from './dto/create-client.dto';
import { ResCreateClientDto } from './dto/res-create-client.dto';
import { ResGetAllClientsDto } from './dto/res-get-all-clients.dto';
import { clientsConst } from 'src/entities/clients/clients.const';
import { ResGetOneClientDto } from './dto/res-get-one-client.dto';
import { ResPutClientDto } from './dto/res-put-client.dto';

@Injectable()
export class ClientsService {
  constructor( @InjectModel(Yoga_clients) private readonly yogaClientsModel: typeof Yoga_clients ) {}
  
  async findAll(): Promise<ResGetAllClientsDto> {
    try {
      const clients = await this.yogaClientsModel.findAll();
      return {
        result: clients,
        error: '',
      }; 
    } catch(err) {
      // throw new Error(clientsConst.ERROR_GET_ALL_CLIENTS + `${err}`);
      return {
        result: null,
        error: clientsConst.ERROR_GET_ALL_CLIENTS + `${err}`,
      }
    }
  }

  async create(createClientDto: CreateClientDto): Promise<ResCreateClientDto> {
    try {
      const { data, error } = await supabase.rpc('add_yoga_client', {...createClientDto});
      if (error) {
        throw new Error(JSON.stringify(error));
      }
      return {
        result: data,
        error: JSON.stringify(error),
      }
    } catch(err) {
      // throw new Error(clientsConst.ERROR_CREATE_CLIENT + `${err}`);
      return {
        result: null,
        error: clientsConst.ERROR_CREATE_CLIENT + `${err}`,
      }
    }
  }
  
  async remove(id: string): Promise<ResCreateClientDto> {
    try {
      const { data, error } = await supabase.rpc('delete_yoga_client', {'id': +id});
      if (error) {
        throw new Error(JSON.stringify(error));
      }
      return {
        result: data,
        error: JSON.stringify(error),
      }
    } catch(err) {
      // throw new Error(clientsConst.ERROR_DELETE_CLIENT + `${err}`);
      return {
        result: null,
        error: clientsConst.ERROR_DELETE_CLIENT + `${err}`,
      }
    }
  }

  async findOne(id: string): Promise<ResGetOneClientDto> {
    try {
      const client = await this.yogaClientsModel.findOne({
        where: {
          client_id: id,
        },
      });
      return {
        result: client,
        error: '',
      }
    } catch (err) {
      // throw new Error(clientsConst.ERROR_FIND_ONE_CLIENT + `${err}`);
      return {
        result: null,
        error: clientsConst.ERROR_FIND_ONE_CLIENT + `${err}`,
      }
    }
  }
  
  async update(id: string, createClientDto: CreateClientDto): Promise<ResPutClientDto>{
    try {
      const client = await this.yogaClientsModel.update(createClientDto, {
        where: { 
         client_id: id, 
       }
      });
      return {
        result: client,
        error: '',
      }
    } catch (err) {
      return {
        result: null,
        error: clientsConst.ERROR_PUT_CLIENT + `${err}`,
      }
    } 
  }

}
