/* eslint-disable prettier/prettier */

import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ComfortAttrs {
    name: string;
}

@Table({ tableName: "comfort" })
export class Comfort extends Model<Comfort, ComfortAttrs> {
    @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING })
    name: string;

    // @BelongsToMany(() => Role, () => UserRole)
    // role: Role[];
}
