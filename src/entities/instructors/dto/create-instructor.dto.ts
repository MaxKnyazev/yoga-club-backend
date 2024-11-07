export class CreateInstructorDto {
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  specialization: string;
  experience_years: number;
}

  /**
create table
  yoga_instructors (
    instructor_id bigint primary key generated always as identity,
    first_name text,
    last_name text,
    phone_number text,
    email text,
    specialization text,
    experience_years int
  );

 */