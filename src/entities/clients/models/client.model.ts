import { AutoIncrement, Column, HasMany, IsDate, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Yoga_clubcards } from 'src/entities/clubcards/models/clubcards.model';
import { Yoga_sessions } from 'src/entities/sessions/models/sessions.model';

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

  // Связь "один ко многим" с моделью Yoga_clubcards
  @HasMany(() => Yoga_clubcards)
  clubcards: Yoga_clubcards[];

  // Связь "один ко многим" с моделью Yoga_sessions
  @HasMany(() => Yoga_sessions)
  sessions: Yoga_sessions[];
}
