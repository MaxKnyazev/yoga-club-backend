import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { supabase } from 'src/supabase';
import { Yoga_instructors } from './models/instructor.model';
import { instructorsConst } from './instructors.const'
import { ResGetAllInstructorsDto } from './dto/res-get-all-instructors.dto';
import { CreateInstructorDto } from './dto/insctructors.dto';
import { ResCreateInstructorDto } from './dto/res-create-instructor.dto';
import { ResGetOneInstrictorDto } from './dto/res-get-one-instrictor.dto';
import { ResPutInstructorDto } from './dto/res-put-instructor.dto';

@Injectable()
export class InstructorsService {
  constructor( @InjectModel(Yoga_instructors) private readonly yogaInstructorsModel: typeof Yoga_instructors ) {}

  async findAll(): Promise<ResGetAllInstructorsDto> {
    try {
      const instructors = await this.yogaInstructorsModel.findAll();
      return {
        result: instructors,
        error: '',
      }; 
    } catch(err) {
      return {
        result: null,
        error: instructorsConst.ERROR_GET_ALL_INSTRUCTORS + `${err}`,
      }
    }
  }

  async create(createInstructorDto: CreateInstructorDto): Promise<ResCreateInstructorDto> {
    try {
      const { data, error } = await supabase.rpc('add_yoga_instructor', {...createInstructorDto});
      if (error) {
        throw new Error(JSON.stringify(error));
      }
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

  async remove(id: string): Promise<ResCreateInstructorDto> {
    try {
      console.log(id)
      const { data, error } = await supabase.rpc('delete_yoga_instructor', {'id': +id});
      if (error) {
        throw new Error(JSON.stringify(error));
      }
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

  async findOne(id: string): Promise<ResGetOneInstrictorDto> {
    try {
      const instructor = await this.yogaInstructorsModel.findOne({
        where: {
          instructor_id: id,
        },
      });
      return {
        result: instructor,
        error: '',
      }
    } catch (err) {
      return {
        result: null,
        error: instructorsConst.ERROR_FIND_ONE_INSTRUCTOR + `${err}`,
      }
    }
}

async update(id: string, createInstructorDto: CreateInstructorDto): Promise<ResPutInstructorDto>{
  try {
    const instructor = await this.yogaInstructorsModel.update(createInstructorDto, {
      where: { 
        instructor_id: id, 
     }
    });
    return {
      result: instructor,
      error: '',
    }
  } catch (err) {
    return {
      result: null,
      error: instructorsConst.ERROR_PUT_INSTRUCTOR + `${err}`,
    }
  } 
}



}

