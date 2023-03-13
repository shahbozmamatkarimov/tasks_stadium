/* eslint-disable prettier/prettier */

import { Column, DataType, Model, Table } from "sequelize-typescript";

interface AdminAttrs {
    username: string;
    email: string;
    telegram_link: string;
    admin_photo: string;
    hashed_password: string;
    is_active: boolean;
    is_creater: boolean;
    hashed_refresh_token: string;
}

@Table({ tableName: "admin" })
export class Admin extends Model<Admin, AdminAttrs> {
    @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING })
    email: string;

    @Column({ type: DataType.STRING })
    telegram_link: string;

    @Column({ type: DataType.STRING })
    admin_photo: string;

    @Column({ type: DataType.STRING })
    hashed_password: string;

    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    is_active: boolean;

    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    is_creater: boolean;

    @Column({ type: DataType.STRING })
    hashed_refresh_token: string;

    // @BelongsToMany(() => Role, () => UserRole)
    // role: Role[];
}
