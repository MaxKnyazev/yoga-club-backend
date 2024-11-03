import { AutoIncrement, Column, IsDate, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table
export class Yoga_all_tables_logs extends Model {
  
  @AutoIncrement
  @PrimaryKey
  @Column
  log_id: bigint;
  
  @IsDate
  @Column
  log_date: Date;

  @Column
  operation: string;

  @Column
  table_name: string;

  @Column
  trigger_name: string;

  @Column
  tables_id: bigint;
}
