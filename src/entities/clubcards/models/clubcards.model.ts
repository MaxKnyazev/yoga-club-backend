import { AutoIncrement, BelongsTo, Column, ForeignKey, IsDate, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Yoga_cardtypes } from 'src/entities/cardtypes/models/cardtypes.model';
import { Yoga_clients } from 'src/entities/clients/models/client.model';

@Table
export class Yoga_clubcards extends Model {
  
  @AutoIncrement
  @PrimaryKey
  @Column
  card_id: bigint;

  // Внешний ключ для связи с Yoga_clients
  @ForeignKey(() => Yoga_clients)
  @Column
  client_id: number;

  @BelongsTo(() => Yoga_clients)
  clients: Yoga_clients;
  
  // Внешний ключ для связи с Yoga_cardtypes
  @ForeignKey(() => Yoga_cardtypes)
  @Column
  card_type_id: number;

  @IsDate
  @Column
  start_date: Date;

  @IsDate
  @Column
  end_date: Date;

  @Column
  status: string;
}

/*
create table
  yoga_clubcards (
    card_id bigint primary key generated always as identity,
    client_id int,
    card_type_id int,
    start_date timestamp with time zone,
    end_date timestamp with time zone,
    status text,
    
    foreign key (client_id) references yoga_clients (client_id),
    foreign key (card_type_id) references yoga_cardtypes (card_type_id)
  );
*/