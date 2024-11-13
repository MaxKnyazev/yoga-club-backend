import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ClientsModule } from './entities/clients/clients.module';
import { LogsModule } from './entities/logs/logs.module';
import { InstructorsModule } from './entities/instructors/instructors.module';
import { MembershiptypesModule } from './entities/membershiptypes/membershiptypes.module';
import { CardtypesModule } from './entities/cardtypes/cardtypes.module';
import { ClubcardsModule } from './entities/clubcards/clubcards.module';
import { MembershipsModule } from './entities/memberships/memberships.module';
import { SessionsModule } from './entities/sessions/sessions.module';
import { ConfigModule } from '@nestjs/config';
import { sequelizeConfig } from './sequelize/sequelize.config';
import { config } from 'dotenv';

config();
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
      cache: true,
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: sequelizeConfig,
    }),
    ClientsModule,
    LogsModule,
    InstructorsModule,
    MembershiptypesModule,
    CardtypesModule,
    ClubcardsModule,
    MembershipsModule,
    SessionsModule,
  ]
})
export class AppModule {}
