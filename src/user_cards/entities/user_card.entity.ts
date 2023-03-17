import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Cart } from "../../cart/entities/cart.entity";
import { User } from "../../users/models/user.model";

interface UserCardAttrs {
    user_id: number;
    name: string;
    phone: string;
    number: string;
    year: number;
    month: number;
    is_active: boolean;
    is_main: boolean;
}

@Table({ tableName: "usercard" })
export class UserCard extends Model<UserCard, UserCardAttrs> {
    @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
    id: number;

    @ForeignKey(() => User)
    @Column({ type: DataType.NUMBER })
    user_id: number;

    @Column({ type: DataType.STRING })
    name: string;

    @Column({ type: DataType.STRING })
    phone: string;

    @Column({ type: DataType.STRING })
    number: string;

    @Column({ type: DataType.NUMBER })
    year: number;

    @Column({ type: DataType.NUMBER })
    month: number;

    @Column({ type: DataType.BOOLEAN })
    is_active: boolean;

    @Column({ type: DataType.BOOLEAN })
    is_main: boolean;
    
    @BelongsTo(() => User)
    user: User[];
    
    @HasMany(() => Cart)
    cart: Cart[];
}
