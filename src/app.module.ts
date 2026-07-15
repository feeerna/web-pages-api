import { Module } from '@nestjs/common';
import { CustomersController } from './customers/customers.controller';

@Module({
  controllers: [CustomersController],
})
export class AppModule {}