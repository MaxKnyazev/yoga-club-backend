import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
// import { CreateInstructorDto } from './dto/create-instructor.dto';
import { Yoga_instructors } from './models/instructor.model';

@Injectable()
export class InstructorsService {
  constructor( @InjectModel(Yoga_instructors) private readonly yogaInstructorsModel: typeof Yoga_instructors ) {}

  async findAll(): Promise<Yoga_instructors[]> {
    const instructors = await this.yogaInstructorsModel.findAll();
    // const instructors = [];
    return instructors; 
  }
}


/***
 * import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
// import { CreateUserDto } from './dto/create-user.dto';
import { Yoga_clients } from './models/client.model';

@Injectable()
export class ClientsService {
  constructor( @InjectModel(Yoga_clients) private readonly yogaClientsModel: typeof Yoga_clients ) {}
  
  async findAll(): Promise<Yoga_clients[]> {
      const clients = await this.yogaClientsModel.findAll();
      return clients; 
  }

  // async create(createUserDto: CreateUserDto): Promise<User> {
  //   const userCandidate = await this.userModel.create({
  //     firstName: createUserDto.firstName,
  //     lastName: createUserDto.lastName,
  //   });
  //   return userCandidate;
  // }

  // async findOne(id: string): Promise<User> {
  //   const user = await this.userModel.findOne({
  //     where: {
  //       id,
  //     },
  //   });
  //   return user;
  // }

  // async removeUser(id: string): Promise<void> {
  //   const user = await this.findOne(id);
  //   await user.destroy();
  // }

  // // try-catch и вернуть message или ошибку
  // async updateUser(id: string, createUserDto: CreateUserDto): Promise<any>{
  //    return await this.userModel.update(createUserDto, {
  //      where: { id }
  //    });
  //  }

}

*/