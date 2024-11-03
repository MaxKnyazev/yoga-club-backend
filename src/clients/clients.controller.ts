import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { ResCreateClientDto } from './dto/res-create-client.dto';
import { Yoga_clients } from './models/client.model';
import { ClientsService } from './clients.service';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}
  
  @Get()
  findAll(): Promise<Yoga_clients[]> {
    return this.clientsService.findAll();
  }

  // @Get()
  // findAll(): Promise<Yoga_clients[]> {
  //   return this.clientsService.findAll();
  // }

  @Post()
  create(@Body() createClientDto: CreateClientDto): Promise<ResCreateClientDto> {
    return this.clientsService.create(createClientDto);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string): Promise<User> {
  //   return this.usersService.findOne(id);
  // }

  @Delete(':id')
  removeUser(@Param('id') id: string): Promise<ResCreateClientDto> {
    return this.clientsService.removeClient(id);
  }

  // @Put(':id')
  // async updateUser(@Param('id') id: string, @Body() createUserDto: CreateUserDto): Promise<any> {
  //   return this.usersService.updateUser(
  //     id,
  //     createUserDto
  //   );
  // }

}