export class CreateSessionDto {
  session_id: number;
  client_id: number;
  instructor_id: number;
  visit_date: Date;
  membership_id: number;
  card_id: number;
  visit_type: string;
}
