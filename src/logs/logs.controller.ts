import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
// import { CreateClientDto } from './dto/create-client.dto';
import { Yoga_all_tables_logs } from './models/log.model';
import { LogsService } from './logs.service';

@Controller('logs')
export class LogsController {
  constructor(private readonly logsService: LogsService) {}

  @Get()
  findAll(): Promise<Yoga_all_tables_logs[]> {
    return this.logsService.findAll();
  }

  @Delete(':id')
  removeUser(@Param('id') id: string): Promise<void> {
    return this.logsService.removeLog(id);
  }
 
}

