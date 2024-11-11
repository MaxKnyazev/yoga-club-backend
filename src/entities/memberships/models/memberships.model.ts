import { AutoIncrement, BelongsTo, Column, ForeignKey, IsDate, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Yoga_clients } from 'src/entities/clients/models/client.model';
import { Yoga_membershiptypes } from 'src/entities/membershiptypes/models/membershiptypes.model';

@Table
export class Yoga_memberships extends Model {
  
  @AutoIncrement
  @PrimaryKey
  @Column
  memberships_id: bigint;

  // Внешний ключ для связи с Yoga_clients
  @ForeignKey(() => Yoga_clients)
  @Column
  client_id: number;

  @BelongsTo(() => Yoga_clients)
  clients: Yoga_clients;
  
  // Внешний ключ для связи с Yoga_membershiptypes
  @ForeignKey(() => Yoga_membershiptypes)
  @Column
  type_id: number;

  @IsDate
  @Column
  start_date: Date;

  @IsDate
  @Column
  end_date: Date;

  @Column
  price: number;

  @Column
  sessions_used: number;

}




// create table
//   yoga_memberships (
//     membership_id bigint primary key generated always as identity,

//     client_id int,
//     type_id int, 

//     start_date timestamp with time zone,
//     end_date timestamp with time zone,
//     price decimal(10, 2),
//     sessions_used int,

//     foreign key (client_id) references yoga_clients (client_id),
//     foreign key (type_id) references yoga_membershiptypes (type_id)
//   );
