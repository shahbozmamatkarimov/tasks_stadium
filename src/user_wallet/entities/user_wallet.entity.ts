import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Cart } from "../../cart/entities/cart.entity";
import { User } from "../../users/models/user.model";

interface UserWalletAttr {
    user_id: number;
    wallet: number;
}

@Table({ tableName: "userWallet" })
export class UserWallet extends Model<UserWallet, UserWalletAttr> {
    @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
    id: number;

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER })
    user_id: number;

    @Column({ type: DataType.INTEGER })
    wallet: number;

    @BelongsTo(() => User)
    user: User[];
    
    @HasMany(() => Cart)
    cart: Cart[];
}
