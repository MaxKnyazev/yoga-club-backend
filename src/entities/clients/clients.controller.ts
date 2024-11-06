import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { ResCreateClientDto } from './dto/res-create-client.dto';
// import { Yoga_clients } from './models/client.model';
import { ClientsService } from './clients.service';
import { ResGetAllClientsDto } from './dto/res-get-all-clients.dto';
import { ResGetOneClientDto } from './dto/res-get-one-client.dto';
import { ResPutClientDto } from './dto/res-put-client.dto';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}
  
  @Get()
  findAll(): Promise<ResGetAllClientsDto> {
    return this.clientsService.findAll();
  }

  @Post()
  create(@Body() createClientDto: CreateClientDto): Promise<ResCreateClientDto> {
    return this.clientsService.create(createClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<ResCreateClientDto> {
    return this.clientsService.remove(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ResGetOneClientDto> {
    return this.clientsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() createClientDto: CreateClientDto): Promise<ResPutClientDto> {
    return this.clientsService.update(
      id,
      createClientDto
    );
  }

}
