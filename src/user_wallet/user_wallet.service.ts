import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserWalletDto } from './dto/create-user_wallet.dto';
import { UpdateUserWalletDto } from './dto/update-user_wallet.dto';
import { InjectModel } from '@nestjs/sequelize';
import { UserWallet } from './entities/user_wallet.entity';

@Injectable()
export class UserWalletService {
  constructor(@InjectModel(UserWallet) private userWalletRepo: typeof UserWallet,
    private readonly UserWalletService: UserWalletService) { };

  async create(createUserWalletDto: CreateUserWalletDto) {
    return await this.userWalletRepo.create(CreateUserWalletDto);
  }

  async findAll() {
    return await this.userWalletRepo.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const stadiumTime = await this.userWalletRepo.findOne({ where: { id }, include: { all: true } });
    return stadiumTime;
  }

  async update(id: number, updateUserWalletDto: UpdateUserWalletDto) {
    const stadiumTime = await this.userWalletRepo.update({ ...updateUserWalletDto }, { where: { id }, returning: true });
    return stadiumTime[1][0];
  }

  async remove(id: number) {
    const stadiumTime = await this.userWalletRepo.destroy({ where: { id } });
    if (!stadiumTime) throw new HttpException("UserWallet not found", HttpStatus.NOT_FOUND);
    return { message: "UserWallet deleted" };
  }
}
