import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserCardDto } from './dto/create-user_card.dto';
import { UpdateUserCardDto } from './dto/update-user_card.dto';
import { InjectModel } from '@nestjs/sequelize';
import { UserCard } from './entities/user_card.entity';
import { MailService } from '../mail/mail.service';

@Injectable()
export class UserCardsService {
  constructor(@InjectModel(UserCard) private userCardsRepo: typeof UserCard,
    private readonly userCardService: UserCardsService) { };

  async create(createUserCardDto: CreateUserCardDto) {
    return await this.userCardsRepo.create(createUserCardDto);
  }

  async findAll() {
    return await this.userCardsRepo.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const stadiumTime = await this.userCardsRepo.findOne({ where: { id }, include: { all: true } });
    return stadiumTime;
  }

  async update(id: number, updateUserCardDto: UpdateUserCardDto) {
    const stadiumTime = await this.userCardsRepo.update({ ...updateUserCardDto }, { where: { id }, returning: true });
    return stadiumTime[1][0];
  }

  async remove(id: number) {
    const stadiumTime = await this.userCardsRepo.destroy({ where: { id } });
    if (!stadiumTime) throw new HttpException("UserCard not found", HttpStatus.NOT_FOUND);
    return { message: "UserCard deleted" };
  }
}
