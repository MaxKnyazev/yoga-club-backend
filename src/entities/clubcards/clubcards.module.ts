import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ClubcardsController } from './clubcards.controller';
import { ClubcardsService } from './clubcards.service';
import { Yoga_clubcards } from './models/clubcards.model';

@Module({
  imports: [SequelizeModule.forFeature([Yoga_clubcards])],
  controllers: [ClubcardsController],
  providers: [ClubcardsService]
})
export class ClubcardsModule {}
