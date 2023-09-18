/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ContactService } from './contact.service';
import { Contact } from 'src/entities/contact.entity';

@Controller('contact')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Get()
  readAll(): Promise<Contact[]> {
    return this.contactService.selectAll();
  }

  @Get(':id')
  readOne(@Param('id') id): Promise<Contact> {
    return this.contactService.select(id);
  }

  @Post('create')
  async create(@Body() contact: Contact): Promise<Contact> {
    return this.contactService.create(contact);
  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() contact: Contact): Promise<any> {
    contact.id = Number(id);
    return this.contactService.update(contact);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.contactService.delete(id);
  }
}
