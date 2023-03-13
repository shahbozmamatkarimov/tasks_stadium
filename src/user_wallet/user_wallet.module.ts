import { Module } from '@nestjs/common';
import { UserWalletService } from './user_wallet.service';
import { UserWalletController } from './user_wallet.controller';
import { UserWallet } from './entities/user_wallet.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([UserWallet])],
  controllers: [UserWalletController],
  providers: [UserWalletService],
})
export class UserWalletModule {}
