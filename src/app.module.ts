import { Module } from '@nestjs/common';
// import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ClientsModule } from './entities/clients/clients.module';
import { LogsModule } from './entities/logs/logs.module';
import { databaseEnv } from './../database-env';
import { InstructorsModule } from './entities/instructors/instructors.module';
import { MembershiptypesModule } from './entities/membershiptypes/membershiptypes.module';
import { CardtypesModule } from './entities/cardtypes/cardtypes.module';
import { ClubcardsModule } from './entities/clubcards/clubcards.module';
import { MembershipsModule } from './entities/memberships/memberships.module';
import { config } from 'dotenv';

// require('dotenv').config()
// console.log(process.env)
// console.log(process.env.PROMPT)

config();

@Module({
  imports: [
    // ConfigModule.forRoot({
    //   envFilePath: ['.env'],
    //   isGlobal: true,
    //   cache: true,
    // }),


    // SequelizeModule.forRootAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: (configService: ConfigService) => ({
    //     dialect: 'postgres',
    //     host: configService.get<string>('DATABASE_HOST'),
    //     port: configService.get<number>('DATABASE_PORT'),
    //     username: configService.get<string>('DATABASE_USER'),
    //     password: configService.get<string>('DATABASE_PASSWORD'),
    //     path: configService.setEnvFilePaths(['.env']),
    //     database: 'postgres',
    //     autoLoadModels: true, 
    //     synchronize: true, 
    //   }),
    // }),

    SequelizeModule.forRoot({
      host: databaseEnv.DATABASE_HOST,
      username: databaseEnv.DATABASE_USER,
      password: databaseEnv.DATABASE_PASSWORD,
      // password: JSON.stringify(process.env.DATABASE_PASSWORD),
      port: parseInt(databaseEnv.DATABASE_PORT, 10) || 5432,
      dialect: 'postgres',
      database: 'postgres',
      autoLoadModels: true,
      synchronize: true,

      // host: 'aws-0-eu-central-1.pooler.supabase.com',
      // username: 'postgres.aawmnjfmghfxqljmakvv',
      // // username: process.env.DATABASE_USER,
      // password: 'Ahfth3120++',
      // port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
      // dialect: 'postgres',
      // database: 'postgres',
      // autoLoadModels: true,
      // synchronize: true,
    }),

  // }),
  // SequelizeModule.forFeature([ClientsModule])
    ClientsModule,
    LogsModule,
    InstructorsModule,
    MembershiptypesModule,
    CardtypesModule,
    ClubcardsModule,
    MembershipsModule,
  ]
})
export class AppModule {}
