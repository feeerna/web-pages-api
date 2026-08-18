import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WebPagesClients } from './entities/web-pages-clients.entity';
import { People } from './entities/people.entity';
import { Companies } from './entities/companies.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WebPagesClients])],
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule {}
