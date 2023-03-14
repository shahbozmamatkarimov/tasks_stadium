import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { UsersModule } from './users/users.module';
import { RegionModule } from './region/region.module';
import { ComfortModule } from './comfort/comfort.module';
import { DistrictModule } from './district/district.module';
import { MediaModule } from './media/media.module';
import { ComfortStadiumModule } from './comfort-stadium/comfort-stadium.module';
import { CategoriesModule } from './categories/categories.module';
import { StadiumsModule } from './stadiums/stadiums.module';
import { CommentsModule } from './comments/comments.module';
import { StadiumTimesModule } from './stadium_times/stadium_times.module';
import { CartModule } from './cart/cart.module';
import { UserCardsModule } from './user_cards/user_cards.module';
import { OrdersModule } from './orders/orders.module';
import { UserWalletModule } from './user_wallet/user_wallet.module';
import { StatusModule } from './status/status.module';

@Module({
  imports: [AdminModule, UsersModule, RegionModule, ComfortModule, DistrictModule, MediaModule, ComfortStadiumModule, CategoriesModule, StadiumsModule, CommentsModule, StadiumTimesModule, CartModule, UserCardsModule, OrdersModule, UserWalletModule, StatusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
