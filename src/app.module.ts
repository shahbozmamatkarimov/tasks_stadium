import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
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

import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize'
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';
import { UsersModule } from './users/users.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, 'static')
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      models: [],
      autoLoadModels: true,
      logging: true
    }),
    AdminModule, UsersModule, RegionModule, ComfortModule, DistrictModule, MediaModule, ComfortStadiumModule, CategoriesModule, StadiumsModule, CommentsModule, StadiumTimesModule, CartModule, UserCardsModule, OrdersModule, UserWalletModule, StatusModule, MailModule
  ],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule { }
