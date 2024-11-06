import { AutoIncrement, Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table
export class Yoga_instructors extends Model {
  
  @AutoIncrement
  @PrimaryKey
  @Column
  instructor_id: bigint;

  @Column
  first_name: string;

  @Column
  last_name: string;

  @Column
  phone_number: string;
  
  @Column
  email: string;
  
  @Column
  specialization: string;

  @Column
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