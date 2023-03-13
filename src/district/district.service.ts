/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { District } from './entities/district.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class DistrictService {
  constructor(@InjectModel(District) private districtRepo: typeof District,
    private readonly districtService: DistrictService) { };

  async create(createDistrictDto: CreateDistrictDto) {
    return await this.districtRepo.create(createDistrictDto);
  }

  async findAll() {
    return await this.districtRepo.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const district = await this.districtRepo.findOne({ where: { id }, include: { all: true } });
    return district;
  }

  async update(id: number, updateDistrictDto: UpdateDistrictDto) {
    const district = await this.districtRepo.update({ ...updateDistrictDto }, { where: { id }, returning: true });
    return district[1][0];
  }

  async remove(id: number) {
    const district = await this.districtRepo.destroy({ where: { id } });
    if (!district) throw new HttpException("District not found", HttpStatus.NOT_FOUND);
    return { message: "District deleted" };
  }
}
