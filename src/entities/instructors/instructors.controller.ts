import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateInstructorDto } from './dto/insctructors.dto';
import { Yoga_instructors } from './models/instructor.model';
import { InstructorsService } from './instructors.service';

@Controller('instructors')
export class InstructorsController {
  constructor(private readonly insctructorsService: InstructorsService) {}

  @Get()
  findAll(): Promise<Yoga_instructors[]> {
    return this.insctructorsService.findAll();
  }
}




/***
 * import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-client.dto';
import { Yoga_clients } from './models/client.model';
import { ClientsService } from './clients.service';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}
  
  @Get()
  findAll(): Promise<Yoga_clients[]> {
    return this.clientsService.findAll();
  }

  // @Post()
  // create(@Body() createUserDto: CreateUserDto): Promise<User> {
  //   return this.usersService.create(createUserDto);
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string): Promise<User> {
  //   return this.usersService.findOne(id);
  // }

  // @Delete(':id')
  // removeUser(@Param('id') id: string): Promise<void> {
  //   return this.usersService.removeUser(id);
  // }

  // @Put(':id')
  // async updateUser(@Param('id') id: string, @Body() createUserDto: CreateUserDto): Promise<any> {
  //   return this.usersService.updateUser(
  //     id,
  //     createUserDto
  //   );
  // }

}
 */
