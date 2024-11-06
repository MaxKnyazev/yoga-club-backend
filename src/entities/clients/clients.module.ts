import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import { Yoga_clients } from './models/client.model';

@Module({
  imports: [SequelizeModule.forFeature([Yoga_clients])],
  controllers: [ClientsController],
  providers: [ClientsService]
})
export class ClientsModule {}
