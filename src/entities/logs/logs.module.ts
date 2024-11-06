import { Module } from '@nestjs/common';
import { LogsController } from './logs.controller';
import { LogsService } from './logs.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Yoga_all_tables_logs } from './models/log.model';

@Module({
  imports: [SequelizeModule.forFeature([Yoga_all_tables_logs])],
  controllers: [LogsController],
  providers: [LogsService]
})
export class LogsModule {}
