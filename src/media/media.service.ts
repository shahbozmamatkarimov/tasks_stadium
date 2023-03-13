/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { Media } from './entities/media.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class MediaService {
  constructor(@InjectModel(Media) private mediaRepo: typeof Media,
    private readonly mediaService: MediaService) { };

  async create(createMediaDto: CreateMediaDto) {
    return await this.mediaRepo.create(createMediaDto);
  }

  async findAll() {
    return await this.mediaRepo.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const media = await this.mediaRepo.findOne({ where: { id }, include: { all: true } });
    return media;
  }

  async update(id: number, updateMediaDto: UpdateMediaDto) {
    const media = await this.mediaRepo.update({ ...updateMediaDto }, { where: { id }, returning: true });
    return media[1][0];
  }

  async remove(id: number) {
    const media = await this.mediaRepo.destroy({ where: { id } });
    if (!media) throw new HttpException("Media not found", HttpStatus.NOT_FOUND);
    return { message: "Media deleted" };
  }
}
