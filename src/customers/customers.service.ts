import { Injectable } from '@nestjs/common';
import { FormDto } from './dto/create-customer.dto';
// import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomersService {
  create(createCustomerDto: FormDto) {
    return 'This action adds a new customer';
  }

  findAll() {
    return `This action returns all customers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customer`;
  }

  update(id: number, updateCustomerDto: FormDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
