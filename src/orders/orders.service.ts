import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order) private orderRepo: typeof Order,
    private readonly OrderService: OrdersService) { };

  async create(createOrderDto: CreateOrderDto) {
    return await this.orderRepo.create(createOrderDto);
  }

  async findAll() {
    return await this.orderRepo.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const stadiumTime = await this.orderRepo.findOne({ where: { id }, include: { all: true } });
    return stadiumTime;
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    const stadiumTime = await this.orderRepo.update({ ...updateOrderDto }, { where: { id }, returning: true });
    return stadiumTime[1][0];
  }

  async remove(id: number) {
    const stadiumTime = await this.orderRepo.destroy({ where: { id } });
    if (!stadiumTime) throw new HttpException("Order not found", HttpStatus.NOT_FOUND);
    return { message: "Order deleted" };
  }
}
