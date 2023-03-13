import { Column, DataType, Model, Table } from "sequelize-typescript";

interface CartAttrs {
    user_id: number;
    user_wallet_id: number;
    user_times_id: number;
    date: Date;
 
}

@Table({ tableName: "cart" })
export class Cart extends Model<Cart, CartAttrs> {
    @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.INTEGER })
    user_id: number;

    @Column({ type: DataType.INTEGER })
    user_wallet_id: number;

    @Column({ type: DataType.INTEGER })
    user_times_id: number;

    @Column({ type: DataType.DATE, defaultValue: Date.now() })
    date: Date;

    // @BelongsToMany(() => Role, () => UserRole)
    // role: Role[];
}
