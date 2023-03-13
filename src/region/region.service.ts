/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { Region } from './entities/region.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class RegionService {
  constructor(@InjectModel(Region) private regionRepo: typeof Region,
    private readonly regionService: RegionService) { };

  async create(createRegionDto: CreateRegionDto) {
    return await this.regionRepo.create(createRegionDto);
  }

  async findAll() {
    return await this.regionRepo.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const region = await this.regionRepo.findOne({ where: { id }, include: { all: true } });
    return region;
  }

  async update(id: number, updateRegionDto: UpdateRegionDto) {
    const region = await this.regionRepo.update({ ...updateRegionDto }, { where: { id }, returning: true });
    return region[1][0];
  }

  async remove(id: number) {
    const region = await this.regionRepo.destroy({ where: { id } });
    if (!region) throw new HttpException("Region not found", HttpStatus.NOT_FOUND);
    return { message: "Region deleted" };
  }
}
