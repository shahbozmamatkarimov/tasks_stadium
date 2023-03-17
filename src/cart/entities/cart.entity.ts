import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { UserCard } from "../../user_cards/entities/user_card.entity";
import { StadiumTime } from "../../stadium_times/entities/stadium_time.entity";
import { User } from "../../users/models/user.model";

interface CartAttrs {
    user_id: number;
    user_wallet_id: number;
    st_times_id: number;
    date: Date;
 
}

@Table({ tableName: "cart" })
export class Cart extends Model<Cart, CartAttrs> {
    @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
    id: number;

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER })
    user_id: number;

    @ForeignKey(() => UserCard)
    @Column({ type: DataType.INTEGER })
    user_wallet_id: number;

    @ForeignKey(() => StadiumTime)
    @Column({ type: DataType.INTEGER })
    st_times_id: number;

    @Column({ type: DataType.DATE, defaultValue: Date.now() })
    date: Date;

    @BelongsTo(() => User)
    user: User[];

    @BelongsTo(() => UserCard)
    usercard: UserCard[];

    @BelongsTo(() => StadiumTime)
    stadiumtime: StadiumTime[];

    // HasMany(() => District)
    // district: District[];
}
