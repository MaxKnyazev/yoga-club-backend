import { AutoIncrement, BelongsTo, Column, ForeignKey, IsDate, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Yoga_clients } from 'src/entities/clients/models/client.model';
import { Yoga_clubcards } from 'src/entities/clubcards/models/clubcards.model';
import { Yoga_instructors } from 'src/entities/instructors/models/instructor.model';
import { Yoga_memberships } from 'src/entities/memberships/models/memberships.model';

@Table
export class Yoga_sessions extends Model {
  
  @AutoIncrement
  @PrimaryKey
  @Column
  session_id: bigint;

  // Внешний ключ для связи с Yoga_clients
  @ForeignKey(() => Yoga_clients)
  @Column
  client_id: number;

  @BelongsTo(() => Yoga_clients)
  clients: Yoga_clients;
  
  // Внешний ключ для связи с Yoga_instructors
  @ForeignKey(() => Yoga_instructors)
  @Column
  instructor_id: number;

  @BelongsTo(() => Yoga_instructors)
  instructors: Yoga_instructors;

  @IsDate
  @Column
  visit_date: Date;

  // Внешний ключ для связи с Yoga_memberships
  @ForeignKey(() => Yoga_memberships)
  @Column
  membership_id: number;

  @BelongsTo(() => Yoga_memberships)
  memberships: Yoga_memberships;

  // Внешний ключ для связи с Yoga_memberships
  @ForeignKey(() => Yoga_clubcards)
  @Column
  card_id: number;

  @BelongsTo(() => Yoga_clubcards)
  clubcards: Yoga_clubcards;

  @Column
  visit_type: string;

}





// create table
//   yoga_sessions (

//     session_id bigint primary key generated always as identity,
//     client_id int,
//     instructor_id int,
//     visit_date timestamp with time zone,
//     membership_id int null,
//     card_id int null,
//     visit_type text,

//     foreign key (client_id) references yoga_clients (client_id),
//     foreign key (instructor_id) references yoga_instructors (instructor_id),
//     foreign key (membership_id) references yoga_memberships (membership_id),
//     foreign key (card_id) references yoga_clubcards (card_id)
//   );
