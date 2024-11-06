import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { InstructorsController } from './instructors.controller';
import { InstructorsService } from './instructors.service';
import { Yoga_instructors } from './models/instructor.model';

@Module({
  imports: [SequelizeModule.forFeature([Yoga_instructors])],
  controllers: [InstructorsController],
  providers: [InstructorsService]
})
export class InstructorsModule {}




// import { Module } from '@nestjs/common';
// import { SequelizeModule } from '@nestjs/sequelize';
// import { ClientsController } from './clients.controller';
// import { ClientsService } from './clients.service';
// import { Yoga_clients } from './models/client.model';

// @Module({
//   imports: [SequelizeModule.forFeature([Yoga_clients])],
//   controllers: [ClientsController],
//   providers: [ClientsService]
// })
// export class ClientsModule {}
