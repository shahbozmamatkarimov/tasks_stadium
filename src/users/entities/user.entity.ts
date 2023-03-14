/* eslint-disable prettier/prettier */

import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { UserCard } from "../../user_cards/entities/user_card.entity";
import { Comment } from "../../comments/entities/comment.entity";
import { Stadium } from "../../stadiums/entities/stadium.entity";
import { UserWallet } from "../../user_wallet/entities/user_wallet.entity";

interface UserAttrs {
    first_name: string;
    last_name: string;
    username: string;
    hashed_password: string;
    telegram_link: string;
    email: string;
    phone: string;
    user_photo: string;
    birthday: Date;
    is_active: boolean;
    is_owner: boolean;
    hashed_refresh_token: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, UserAttrs> {
    @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING })
    first_name: string;

    @Column({ type: DataType.STRING })
    last_name: string;

    @Column({ type: DataType.STRING })
    username: string;

    @Column({ type: DataType.STRING })
    hashed_password: string;

    @Column({ type: DataType.STRING })
    telegram_link: string;

    @Column({ type: DataType.STRING })
    email: string;

    @Column({ type: DataType.STRING })
    phone: string;

    @Column({ type: DataType.STRING })
    user_photo: string;

    @Column({ type: DataType.STRING })
    birthday: Date;

    @Column({ type: DataType.STRING })
    is_active: boolean;

    @Column({ type: DataType.STRING })
    is_owner: boolean;

    @Column({ type: DataType.STRING })
    hashed_refresh_token: string;

    // @BelongsToMany(() => Role, () => UserRole)
    // role: Role[];

    @HasMany(() => UserCard)
    UserCard: UserCard[];

    @HasMany(() => Comment)
    Comment: Comment[];

    @HasMany(() => Stadium)
    Stadium: Stadium[];

    @HasMany(() => UserWallet)
    UserWallet: UserWallet[];
}
