import { Module } from '@nestjs/common';
import { UserCardsService } from './user_cards.service';
import { UserCardsController } from './user_cards.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserCard } from './entities/user_card.entity';

@Module({
  exports: [SequelizeModule.forFeature([UserCard])],
  controllers: [UserCardsController],
  providers: [UserCardsService],
})
export class UserCardsModule {}
