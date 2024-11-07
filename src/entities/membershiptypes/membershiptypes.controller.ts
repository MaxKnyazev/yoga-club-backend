import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
// import { Yoga_membershiptypes } from './models/membershiptypes.model';
import { MembershiptypesService } from './membershiptypes.service';
import { ResGetAllMembershiptypesDto } from './dto/res-get-all-membershiptypes.dto';
import { ResGetOneMembershiptypeDto } from './dto/res-get-one-membershiptype.dto';
import { ResPutMembershiptypeDto } from './dto/res-put-membershiptype.dto';
import { CreateMembershiptypeDto } from './dto/create-membershiptype.dto';
import { ResCreateMembershiptypeDto } from './dto/res-create-membershiptype.dto';

@Controller('membershiptypes')
export class MembershiptypesController {
  constructor(private readonly membershiptypesService: MembershiptypesService) {}

  @Get()
    findAll(): Promise<ResGetAllMembershiptypesDto> {
      return this.membershiptypesService.findAll();
    }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ResGetOneMembershiptypeDto> {
    return this.membershiptypesService.findOne(id);
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() createMembershiptypeDto: CreateMembershiptypeDto): Promise<ResPutMembershiptypeDto> {
    return this.membershiptypesService.update(
      id,
      createMembershiptypeDto
    );
  }

  @Post()
  create(@Body() createMembershiptypesDto: CreateMembershiptypeDto): Promise<ResCreateMembershiptypeDto> {
    return this.membershiptypesService.create(createMembershiptypesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<ResCreateMembershiptypeDto> {
    return this.membershiptypesService.remove(id);
  }

}
