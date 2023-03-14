import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "../../users/entities/user.entity";
import { UserWallet } from "../../user_wallet/entities/user_wallet.entity";
import { StadiumTime } from "../../stadium_times/entities/stadium_time.entity";

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

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER })
    user_id: number;

    @ForeignKey(() => UserWallet)
    @Column({ type: DataType.INTEGER })
    user_wallet_id: number;

    @ForeignKey(() => StadiumTime)
    @Column({ type: DataType.INTEGER })
    st_times_id: number;

    @Column({ type: DataType.DATE, defaultValue: Date.now() })
    date: Date;
    
    @Column({ type: DataType.DATE, defaultValue: Date.now() })
    createdAt: Date;

    // @ForeignKey(() => Status)
    @Column({ type: DataType.INTEGER })
    status_id: number;

    @BelongsTo(() => UserWallet)
    UserWallet: UserWallet[];
    
    @BelongsTo(() => StadiumTime)
    StadiumTime: StadiumTime[];
    
    // @BelongsTo(() => Status)
    // Status: Status[];

    // HasMany(() => District)
    // district: District[];
}