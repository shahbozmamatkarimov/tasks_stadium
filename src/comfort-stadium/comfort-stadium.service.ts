/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateComfortStadiumDto } from './dto/create-comfort-stadium.dto';
import { UpdateComfortStadiumDto } from './dto/update-comfort-stadium.dto';
import { InjectModel } from '@nestjs/sequelize';
import { ComfortStadium } from './entities/comfort-stadium.entity';

@Injectable()
export class ComfortStadiumService {
  constructor(@InjectModel(ComfortStadium) private comfortStadiumRepo: typeof ComfortStadium,
    private readonly comfortStadiumService: ComfortStadiumService) { };

  async create(createComfortStadiumDto: CreateComfortStadiumDto) {
    return await this.comfortStadiumRepo.create(createComfortStadiumDto);
  }

  async findAll() {
    return await this.comfortStadiumRepo.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const comfortStadium = await this.comfortStadiumRepo.findOne({ where: { id }, include: { all: true } });
    return comfortStadium;
  }

  async update(id: number, updateComfortStadiumDto: UpdateComfortStadiumDto) {
    const comfortStadium = await this.comfortStadiumRepo.update({ ...updateComfortStadiumDto }, { where: { id }, returning: true });
    return comfortStadium[1][0];
  }

  async remove(id: number) {
    const comfortStadium = await this.comfortStadiumRepo.destroy({ where: { id } });
    if (!comfortStadium) throw new HttpException("ComfortStadium not found", HttpStatus.NOT_FOUND);
    return { message: "ComfortStadium deleted" };
  }
}
