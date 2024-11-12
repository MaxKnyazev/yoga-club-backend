import { Yoga_sessions } from '../models/sessions.model';

export class ResGetAllSessionsDto {
  result: Yoga_sessions[];
  error: string;
}