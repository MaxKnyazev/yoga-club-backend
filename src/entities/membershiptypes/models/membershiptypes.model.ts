import { AutoIncrement, Column, IsDate, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table
export class Yoga_membershiptypes extends Model {
  
  @AutoIncrement
  @PrimaryKey
  @Column
  type_id: bigint;

  @Column
  type_name: string;

  @Column
  sessions_allowed: number;
}
