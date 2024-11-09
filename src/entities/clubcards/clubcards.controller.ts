import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
// import { Yoga_clubcards } from './models/clubcards.model';
import { ClubcardsService } from './clubcards.service';
import { ResGetAllClubcardsDto } from './dto/res-get-all-clubcards.dto';
import { ResGetOneClubcardDto } from './dto/res-get-one-clubcard.dto';
import { CreateClubcardDto } from './dto/create-clubcard.dto';
import { ResCreateClubcardDto } from './dto/res-create-clubcard.dto';
import { ResPutClubcardDto } from './dto/res-put-clubcard.dto';

@Controller('clubcards')
export class ClubcardsController {
  constructor(private readonly clubcardsService: ClubcardsService) {}

  @Get()
  findAll(): Promise<ResGetAllClubcardsDto> {
    return this.clubcardsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ResGetOneClubcardDto> {
    return this.clubcardsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() createClubcardDto: CreateClubcardDto): Promise<ResPutClubcardDto> {
    return this.clubcardsService.update(
      id,
      createClubcardDto
    );
  }

  @Post()
  create(@Body() createClubcardDto: CreateClubcardDto): Promise<ResCreateClubcardDto> {
    return this.clubcardsService.create(createClubcardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<ResCreateClubcardDto> {
    return this.clubcardsService.remove(id);
  }

}
