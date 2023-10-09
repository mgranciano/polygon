import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { User } from '../../models';


@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [],
  providers: [UserService,UserResolver],
  exports: [UserService],
})
export class UserModule {}