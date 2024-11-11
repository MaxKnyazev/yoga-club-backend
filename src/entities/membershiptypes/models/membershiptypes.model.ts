import { AutoIncrement, Column, HasOne, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Yoga_memberships } from 'src/entities/memberships/models/memberships.model';

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

  // Связь "один к одному" с моделью Yoga_memberships
  @HasOne(() => Yoga_memberships)
  memberships: Yoga_memberships;
}
