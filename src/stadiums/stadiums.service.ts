/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateStadiumDto } from './dto/create-stadium.dto';
import { Stadium } from './entities/stadium.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class StadiumsService {
  constructor(@InjectModel(Stadium) private stadiumRepo: typeof Stadium,
    private readonly stadiumService: StadiumsService) { };

  // async create(createStadiumDto: CreateStadiumDto) {
  //   return await this.stadiumRepo.create(createStadiumDto);
  // }

  async findAll() {
    return await this.stadiumRepo.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const stadium = await this.stadiumRepo.findOne({ where: { id }, include: { all: true } });
    return stadium;
  }

  // async update(id: number, updateStadiumDto: UpdateStadiumDto) {
  //   const stadium = await this.stadiumRepo.update({ ...updateStadiumDto }, { where: { id }, returning: true });
  //   return stadium[1][0];
  // }

  async remove(id: number) {
    const stadium = await this.stadiumRepo.destroy({ where: { id } });
    if (!stadium) throw new HttpException("Stadium not found", HttpStatus.NOT_FOUND);
    return { message: "Stadium deleted" };
  }
}
