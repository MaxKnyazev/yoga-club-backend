import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { ResCreateSessionDto } from './dto/res-create-session.dto';
import { CreateSessionDto } from './dto/create-session.dto';
import { ResPutSessionDto } from './dto/res-put-session.dto';
import { ResGetOneSessionDto } from './dto/res-get-one-session.dto';
import { ResGetAllSessionsDto } from './dto/res-get-all-sessions.dto';

@Controller('sessions')
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  @Get()
  findAll(): Promise<ResGetAllSessionsDto> {
    return this.sessionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ResGetOneSessionDto> {
    return this.sessionsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() createSessionDto: CreateSessionDto): Promise<ResPutSessionDto> {
    return this.sessionsService.update(
      id,
      createSessionDto
    );
  }

  @Post()
  create(@Body() createSessionDto: CreateSessionDto): Promise<ResCreateSessionDto> {
    return this.sessionsService.create(createSessionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<ResCreateSessionDto> {
    return this.sessionsService.remove(id);
  }

}
