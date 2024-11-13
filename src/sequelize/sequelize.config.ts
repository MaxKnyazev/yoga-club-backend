import { SequelizeModuleOptions } from '@nestjs/sequelize';

export const sequelizeConfig = (): SequelizeModuleOptions => ({
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  dialect: 'postgres',
  database: 'postgres',
  autoLoadModels: true,
  synchronize: true,
});
  