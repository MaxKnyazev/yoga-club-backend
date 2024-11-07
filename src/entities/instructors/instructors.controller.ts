import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateInstructorDto } from './dto/create-instructor.dto';
// import { Yoga_instructors } from './models/instructor.model';
import { InstructorsService } from './instructors.service';
import { ResGetAllInstructorsDto } from './dto/res-get-all-instructors.dto';
import { ResCreateInstructorDto } from './dto/res-create-instructor.dto';
import { ResGetOneInstrictorDto } from './dto/res-get-one-instrictor.dto';
import { ResPutInstructorDto } from './dto/res-put-instructor.dto';

@Controller('instructors')
export class InstructorsController {
  constructor(private readonly insctructorsService: InstructorsService) {}

  @Get()
  findAll(): Promise<ResGetAllInstructorsDto> {
    return this.insctructorsService.findAll();
  }

  @Post()
  create(@Body() createInstructorDto: CreateInstructorDto): Promise<ResCreateInstructorDto> {
    return this.insctructorsService.create(createInstructorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<ResCreateInstructorDto> {
    return this.insctructorsService.remove(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ResGetOneInstrictorDto> {
    return this.insctructorsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() createInstructorDto: CreateInstructorDto): Promise<ResPutInstructorDto> {
    return this.insctructorsService.update(
      id,
      createInstructorDto
    );
  }


}




/***
 * 
 *   async remove(id: string): Promise<ResCreateInstructorDto> {
    try {
      console.log(id)
      const { data, error } = await supabase.rpc('delete_yoga_instructor', {'id': +id});
      return {
        result: data,
        error: JSON.stringify(error),
      }
    } catch(err) {
      return {
        result: null,
        error: instructorsConst.ERROR_DELETE_INSTRUCTOR + `${err}`,
      }
    }
  }

 * 
 * 
 *   async create(createInstructorDto: CreateInstructorDto): Promise<ResInstructorClientDto> {
    try {
      const { data, error } = await supabase.rpc('add_yoga_instructor', {...createInstructorDto});
      return {
        result: data,
        error: JSON.stringify(error),
      }
    } catch(err) {
      return {
        result: null,
        error: instructorsConst.ERROR_CREATE_INSTRUCTOR + `${err}`,
      }
    }
  }




 * 
 */