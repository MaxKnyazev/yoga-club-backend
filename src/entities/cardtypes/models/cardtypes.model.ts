import { AutoIncrement, Column, IsDate, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table
export class Yoga_cardtypes extends Model {
  
  @AutoIncrement
  @PrimaryKey
  @Column
  card_type_id: bigint;

  @Column
  card_type_name: string;

  @Column
  price: number;
}
