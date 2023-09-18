/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from 'src/entities/contact.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>,
  ) {}

  async create(contact: Contact): Promise<Contact> {
    return await this.contactRepository.save(contact);
  }

  async selectAll(): Promise<Contact[]> {
    return await this.contactRepository.find();
  }

  async select(id: number): Promise<Contact> {
    return await this.contactRepository.findOne({
      where: { id: id },
      lock: { mode: 'optimistic', version: 1 },
    });
  }

  async update(contact: Contact): Promise<UpdateResult> {
    return await this.contactRepository.update(contact.id, contact);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.contactRepository.delete(id);
  }
}
