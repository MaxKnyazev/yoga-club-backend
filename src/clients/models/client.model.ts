import { AutoIncrement, Column, IsDate, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table
export class Yoga_clients extends Model {
  
  @AutoIncrement
  @PrimaryKey
  @Column
  client_id: bigint;

  @Column
  first_name: string;

  @Column
  last_name: string;

  @Column
  phone_number: string;
  
  @Column
  email: string;
  
  @IsDate
  @Column
  date_of_birth: Date;
  
  @IsDate
  @Column
  registration_date: Date;

  @Column
  status: string;
}
