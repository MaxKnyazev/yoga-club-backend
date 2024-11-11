import { Yoga_memberships } from '../models/memberships.model';

export class ResGetAllMembershipsDto {
  result: Yoga_memberships[];
  error: string;
}