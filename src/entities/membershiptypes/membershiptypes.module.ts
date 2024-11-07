import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MembershiptypesController } from './membershiptypes.controller';
import { MembershiptypesService } from './membershiptypes.service';
import { Yoga_membershiptypes } from './models/membershiptypes.model';

@Module({
  imports: [SequelizeModule.forFeature([Yoga_membershiptypes])],
  controllers: [MembershiptypesController],
  providers: [MembershiptypesService]
})
export class MembershiptypesModule {}
