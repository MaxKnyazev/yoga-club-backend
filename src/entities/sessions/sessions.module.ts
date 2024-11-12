import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SessionsController } from './sessions.controller';
import { SessionsService } from './sessions.service';
import { Yoga_sessions } from './models/sessions.model';

@Module({
  imports: [SequelizeModule.forFeature([Yoga_sessions])],
  controllers: [SessionsController],
  providers: [SessionsService]
})
export class SessionsModule {}
