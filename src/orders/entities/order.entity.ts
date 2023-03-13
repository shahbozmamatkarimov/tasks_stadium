import { Column, DataType, Model, Table } from "sequelize-typescript";

interface OrderAttrs {
    user_id: number;
    user_wallet_id: number;
    user_times_id: number;
    date: Date;
}

@Table({ tableName: "order" })
export class Order extends Model<Order, OrderAttrs> {
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
    
    @Column({ type: DataType.DATE, defaultValue: Date.now() })
    createdAt: Date;

    @Column({ type: DataType.INTEGER })
    status_id: number;

    // @BelongsToMany(() => Role, () => UserRole)
    // role: Role[];
}