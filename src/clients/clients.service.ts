import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateClientDto } from './dto/create-client.dto';
import { ResCreateClientDto } from './dto/res-create-client.dto';
import { Yoga_clients } from './models/client.model';
import { supabase } from './../supabase';

@Injectable()
export class ClientsService {
  constructor( @InjectModel(Yoga_clients) private readonly yogaClientsModel: typeof Yoga_clients ) {}
  async findAll(): Promise<Yoga_clients[]> {
      const clients = await this.yogaClientsModel.findAll();
      return clients; 
  }

  async create(createClientDto: CreateClientDto): Promise<ResCreateClientDto> {
    try {
      const { data, error } = await supabase.rpc('add_yoga_client', {...createClientDto});
      return {
        result: data,
        error: JSON.stringify(error),
      }
    } catch(err) {
      throw new Error(`Ошибка добавления клиента: ${err}`);
    }
  }

  /**
   * 
   * TODO: как использовать хранимую процедуру для получения данных?
   * 
   *   async findAll(): Promise<any> {
      // const clients = await this.yogaClientsModel.findAll();
      // return clients; 

      // const { data, error } = await supabase.rpc('hello_world');
      // const { data, error } = await supabase.rpc('get_all_clients');
      const options = {name: 'tableName++++'};
      const data = await supabase.rpc('add_planet', {...options});
      console.log(data)
      return data; 
  }
   * 
   */

  // async findOne(id: string): Promise<User> {
  //   const user = await this.userModel.findOne({
  //     where: {
  //       id,
  //     },
  //   });
  //   return user;
  // }






  async removeClient(id: string): Promise<ResCreateClientDto> {
    try {
      console.log(id)
      const { data, error } = await supabase.rpc('delete_yoga_client', {"id": +id});
      return {
        result: data,
        error: JSON.stringify(error),
      }
    } catch(err) {
      throw new Error(`Ошибка удаления клиента: ${err}`);
    }
  }

  // async removeClient(id: string): Promise<void> {
  //   const client = await this.yogaClientsModel.findOne({
  //     where: {
  //       client_id: id,
  //     },
  //   });
  //   await client.destroy();
  // }






  // /*TODO: **************************** */
  // // try-catch и вернуть message или ошибку
  // //**************************** */
  // async updateUser(id: string, createUserDto: CreateUserDto): Promise<any>{
  //    return await this.userModel.update(createUserDto, {
  //      where: { id }
  //    });
  //  }

}
