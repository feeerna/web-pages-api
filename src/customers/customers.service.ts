import { Injectable } from '@nestjs/common';
import { FormDto } from './dto/create-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { WebPagesClients } from './entities/web-pages-clients.entity';
import { Repository } from 'typeorm';
// import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(WebPagesClients)
    private userRepository: Repository<WebPagesClients>,
  ) {}

  create(createCustomerDto: FormDto) {
    console.log(createCustomerDto);
    const data = {
      client_id: 1,
      client_type: 'people',
      domain: 'cleinte.com',
      social_media: {
        form_mail: '',
        facebook: '',
        instagram: '',
        twitter: '',
        linkedin: '',
        youtube: '',
      },
    };
    const page = this.userRepository.create(data);
    return this.userRepository.save(page);
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

  async findClientByDomain(domain: string) {
    return this.userRepository.findOneBy({
      domain,
    });
  }
}
