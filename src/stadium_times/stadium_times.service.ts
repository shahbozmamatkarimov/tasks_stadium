import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateStadiumTimeDto } from './dto/create-stadium_time.dto';
import { UpdateStadiumTimeDto } from './dto/update-stadium_time.dto';
import { InjectModel } from '@nestjs/sequelize';
import { StadiumTime } from './entities/stadium_time.entity';

@Injectable()
export class StadiumTimesService {
  constructor(@InjectModel(StadiumTime) private stadiumTimeRepo: typeof StadiumTime,
    private readonly stadiumTimeService: StadiumTimesService) { };

  async create(createStadiumTimeDto: CreateStadiumTimeDto) {
    return await this.stadiumTimeRepo.create(createStadiumTimeDto);
  }

  async findAll() {
    return await this.stadiumTimeRepo.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const stadiumTime = await this.stadiumTimeRepo.findOne({ where: { id }, include: { all: true } });
    return stadiumTime;
  }

  // async update(id: number, updateStadiumTimeDto: UpdateStadiumTimeDto) {
  //   const stadiumTime = await this.stadiumTimeRepo.update({ ...updateStadiumTimeDto }, { where: { id }, returning: true });
  //   return stadiumTime[1][0];
  // }

  async remove(id: number) {
    const stadiumTime = await this.stadiumTimeRepo.destroy({ where: { id } });
    if (!stadiumTime) throw new HttpException("StadiumTime not found", HttpStatus.NOT_FOUND);
    return { message: "StadiumTime deleted" };
  }
}
