/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateComfortDto } from './dto/create-comfort.dto';
import { UpdateComfortDto } from './dto/update-comfort.dto';
import { Comfort } from './entities/comfort.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class ComfortService {
  constructor(@InjectModel(Comfort) private comfortRepo: typeof Comfort,
    private readonly comfortService: ComfortService) { };

  async create(createComfortDto: CreateComfortDto) {
    return await this.comfortRepo.create(createComfortDto);
  }

  async findAll() {
    return await this.comfortRepo.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const comfort = await this.comfortRepo.findOne({ where: { id }, include: { all: true } });
    return comfort;
  }

  async update(id: number, updateComfortDto: UpdateComfortDto) {
    const comfort = await this.comfortRepo.update({ ...updateComfortDto }, { where: { id }, returning: true });
    return comfort[1][0];
  }

  async remove(id: number) {
    const comfort = await this.comfortRepo.destroy({ where: { id } });
    if (!comfort) throw new HttpException("Comfort not found", HttpStatus.NOT_FOUND);
    return { message: "Comfort deleted" };
  }
}
