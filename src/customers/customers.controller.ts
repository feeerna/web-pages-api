import { Controller, Get, Post, Body, Param, Delete, Headers } from '@nestjs/common';
import { CustomersService } from './customers.service';
// import { CreateCustomerDto } from './dto/create-customer.dto';
import { HttpResponse } from 'src/commons/http-response';
import { FormDto } from './dto/create-customer.dto';
import { ApiBody, ApiHeader, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import SendMailUseCase from './use-cases/send-mail';
import { NODE_ENVIROMENTS } from 'src/commons/consts/const';

@ApiTags('customers')
@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  create(
    @Body() createCustomerDto: FormDto,
    @Headers('origin') origin: string,
  ) {
    console.log('origin')
    console.log(origin)
    console.log('origin')
    //enviarCorreo()
    return 'this.customersService.create(createCustomerDto)';
  }

  @Post('send-mail')
  @ApiBody({
    schema: {
      type: 'object',
      example: {
        name: 'Rommelito',
        email: 'rommelmontoya97@gmail.com',
        phone: '+573213424331',
        description: 'Necesito que me ayudes a construir mi pagina web'
      },
    },
  })
  @ApiHeader({
    name: 'origin',
    description: 'Dominio desde donde se realiza la petición',
    required: false,
    example: 'https://rommelmontoya.com',
  })
  async sendMail(
    @Body() sendMailForm: any,
    @Headers('origin') origin: string,
  ) {
    
    const sendMailUseCase = new SendMailUseCase(this.customersService)
    const _origin = process.env.NODE_ENV == NODE_ENVIROMENTS.PRODUCTION ? origin : 'https://rommelmontoya.com'
    const { error, status_code } = await sendMailUseCase.execute({ origin: _origin, form: sendMailForm })

    if(error) {
      return {
        error,
        status: status_code,
        //@ts-ignore
        message: error.message
      }
    }else {
      return {
        status: status_code,
        message: 'success'
      }

    }
    //enviarCorreo()
    return 'this.customersService.create(createCustomerDto)';
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
