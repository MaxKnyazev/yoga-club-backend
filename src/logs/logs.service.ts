import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
// import { CreateClientDto } from './dto/create-client.dto';
import { Yoga_all_tables_logs } from './models/log.model';

@Injectable()
export class LogsService {
  constructor(@InjectModel(Yoga_all_tables_logs) 
              private readonly yogaAllTablesLogsModel: typeof Yoga_all_tables_logs ) {}
  
  async findAll(): Promise<Yoga_all_tables_logs[]> {
      const logs = await this.yogaAllTablesLogsModel.findAll();
      return logs; 
  }

  async removeLog(id: string): Promise<void> {
    const log = await this.yogaAllTablesLogsModel.findOne({
      where: {
        log_id: id,
      },
    });
    await log.destroy();
  }

}