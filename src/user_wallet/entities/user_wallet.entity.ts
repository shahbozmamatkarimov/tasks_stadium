import { Column, DataType, Model, Table } from "sequelize-typescript";

interface UserWalletAttr {
    user_id: number;
    wallet: number;
}

@Table({ tableName: "userWallet" })
export class UserWallet extends Model<UserWallet, UserWalletAttr> {
    @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.INTEGER })
    user_id: number;

    @Column({ type: DataType.INTEGER })
    wallet: number;

    // @BelongsToMany(() => Role, () => UserRole)
    // role: Role[];
}
