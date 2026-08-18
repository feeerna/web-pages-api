import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CustomersService } from './customers.service';
// import { CreateCustomerDto } from './dto/create-customer.dto';
import { HttpResponse } from 'src/commons/http-response';
import { FormDto } from './dto/create-customer.dto';
import { ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('customers')
@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  create(@Body() createCustomerDto: FormDto) {
    return this.customersService.create(createCustomerDto);
  }

  // @Get()
  // findAll(): HttpResponse<Customer[]> {
  //   return 'this.customersService.findAll()';
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return 'this.customersService.findOne(+id)';
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
  //   return 'this.customersService.update(+id, updateCustomerDto)';
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return 'this.customersService.remove(+id)';
  }
}
