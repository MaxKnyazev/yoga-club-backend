import { Yoga_instructors } from '../models/instructor.model';

export class ResGetAllInstructorsDto {
  result: Yoga_instructors[];
  error: string;
}