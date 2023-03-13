import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Cart } from './entities/cart.entity';

@Injectable()
export class CartService {
  constructor(@InjectModel(Cart) private cartRepo: typeof Cart,
    private readonly cartService: CartService) { };

  async create(createCartDto: CreateCartDto) {
    return await this.cartRepo.create(createCartDto);
  }

  async findAll() {
    return await this.cartRepo.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const stadiumTime = await this.cartRepo.findOne({ where: { id }, include: { all: true } });
    return stadiumTime;
  }

  async update(id: number, updateCartDto: UpdateCartDto) {
    const stadiumTime = await this.cartRepo.update({ ...updateCartDto }, { where: { id }, returning: true });
    return stadiumTime[1][0];
  }

  async remove(id: number) {
    const stadiumTime = await this.cartRepo.destroy({ where: { id } });
    if (!stadiumTime) throw new HttpException("Cart not found", HttpStatus.NOT_FOUND);
    return { message: "Cart deleted" };
  }
}
