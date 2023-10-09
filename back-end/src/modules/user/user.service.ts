import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dto';
import { User } from 'src/models';

export interface UserFindOne {
  id?: number;
  email?: string;
}

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async createOne(dto: CreateUserDto) {
    const userExist = await this.userRepository.findOne({
      where: {
        email: dto.email,
      },
    });
    if (userExist)
      throw new BadRequestException('User already registered with email');

    const newUser = this.userRepository.create(dto);
    const user = await this.userRepository.save(newUser);

    delete user.password;
    return user;
  }

  async getOne(id: number, userEntity?: User) {
    const user = await this.userRepository
      .findOne({
        where: {
          id,
        }
      })
      .then(u => (!userEntity ? u : !!u && userEntity.id === u.id ? u : null));

    if (!user)
      throw new NotFoundException('User does not exists or unauthorized');

    return user;
  }

  async findOne(data: UserFindOne) {
    return await this.userRepository
      .createQueryBuilder('user')
      .where(data)
      .addSelect('user.password')
      .getOne();
  }
}
