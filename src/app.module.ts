import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Contact } from './entities/contact.entity';
import { ContactController } from './contact/contact.controller';
import { ContactService } from './contact/contact.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      database: 'nest_ng_db',
      username: 'root',
      password: 'P@ssword01',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Contact]),
  ],
  controllers: [AppController, ContactController],
  providers: [AppService, ContactService],
})
export class AppModule {}
