import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
// import { Yoga_clubcards } from './models/clubcards.model';
import { MembershipsService } from './memberships.service';
import { ResCreateMembershipDto } from './dto/res-create-membership.dto';
import { CreateMembershipDto } from './dto/create-membership.dto';
import { ResPutMembershipDto } from './dto/res-put-membership.dto';
import { ResGetOneMembershipDto } from './dto/res-get-one-membership.dto';
import { ResGetAllMembershipsDto } from './dto/res-get-all-memberships.dto';

@Controller('memberships')
export class MembershipsController {
  constructor(private readonly membershipsService: MembershipsService) {}

  @Get()
  findAll(): Promise<ResGetAllMembershipsDto> {
    return this.membershipsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ResGetOneMembershipDto> {
    return this.membershipsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() createMembershipDto: CreateMembershipDto): Promise<ResPutMembershipDto> {
    return this.membershipsService.update(
      id,
      createMembershipDto
    );
  }

  @Post()
  create(@Body() createMembershipDto: CreateMembershipDto): Promise<ResCreateMembershipDto> {
    return this.membershipsService.create(createMembershipDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<ResCreateMembershipDto> {
    return this.membershipsService.remove(id);
  }

}
