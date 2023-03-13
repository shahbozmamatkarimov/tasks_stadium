/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepo: typeof User,
    private readonly userService: UsersService) { };

  async create(createUserDto: CreateUserDto) {
    return await this.userRepo.create(createUserDto);
  }

  async findAll() {
    return await this.userRepo.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const user = await this.userRepo.findOne({ where: { id }, include: { all: true } });
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepo.update({ ...updateUserDto }, { where: { id }, returning: true });
    return user[1][0];
  }

  async remove(id: number) {
    const user = await this.userRepo.destroy({ where: { id } });
    if (!user) throw new HttpException("User not found", HttpStatus.NOT_FOUND);
    return { message: "User deleted" };
  }
}
