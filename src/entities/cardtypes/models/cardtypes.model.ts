import { AutoIncrement, Column, HasOne, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Yoga_clubcards } from 'src/entities/clubcards/models/clubcards.model';

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

  // Связь "один к одному" с моделью Yoga_clubcards
  @HasOne(() => Yoga_clubcards)
  clubcards: Yoga_clubcards;

}
