/* eslint-disable prettier/prettier */
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Stadium } from "../../stadiums/entities/stadium.entity";
import { Cart } from "../../cart/entities/cart.entity";
import { Order } from "../../orders/entities/order.entity";

interface StadiumTimeAttrs {
    stadium_id: number;
    start_time: Date;
    end_time: Date;
    price: number;
}

@Table({ tableName: "stadiumtime" })
export class StadiumTime extends Model<StadiumTime, StadiumTimeAttrs> {
    @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
    id: number;

    @ForeignKey(() => Stadium)
    @Column({ type: DataType.INTEGER })
    stadium_id: number;

    @Column({ type: DataType.DATE })
    start_time: number;

    @Column({ type: DataType.DATE })
    end_time: string;

    @Column({ type: DataType.NUMBER })
    price: number;

    @BelongsTo(() => Stadium)
    stadium: Stadium[];
    
    @HasMany(() => Cart)
    cart: Cart[];

    @HasMany(() => Order)
    order: Order[];
}
