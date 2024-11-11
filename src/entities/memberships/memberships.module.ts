import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MembershipsController } from './memberships.controller';
import { MembershipsService } from './memberships.service';
import { Yoga_memberships } from './models/memberships.model';

@Module({
  imports: [SequelizeModule.forFeature([Yoga_memberships])],
  controllers: [MembershipsController],
  providers: [MembershipsService]
})
export class MembershipsModule {}
