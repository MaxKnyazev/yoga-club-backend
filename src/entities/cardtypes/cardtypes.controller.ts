import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Yoga_cardtypes } from './models/cardtypes.model';
import { CardtypesService } from './cardtypes.service';
import { ResGetAllCardtypesDto } from './dto/res-get-all-cardtypes.dto';
import { ResGetOneCardtypeDto } from './dto/res-get-one-cardtype.dto';
import { CreateCardtypeDto } from './dto/create-cardtype.dto';
import { ResPutCardtypeDto } from './dto/res-put-cardtype.dto';
import { ResCreateCardtypeDto } from './dto/res-create-cardtype.dto';

@Controller('cardtypes')
export class CardtypesController {
  constructor(private readonly cardtypesService: CardtypesService) {}

  @Get()
    findAll(): Promise<ResGetAllCardtypesDto> {
      return this.cardtypesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<ResGetOneCardtypeDto> {
      return this.cardtypesService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() createCardtypeDto: CreateCardtypeDto): Promise<ResPutCardtypeDto> {
      return this.cardtypesService.update(
        id,
        createCardtypeDto
      );
    }

    @Post()
    create(@Body() createCardtypesDto: CreateCardtypeDto): Promise<ResCreateCardtypeDto> {
      return this.cardtypesService.create(createCardtypesDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<ResCreateCardtypeDto> {
      return this.cardtypesService.remove(id);
    }

  }
