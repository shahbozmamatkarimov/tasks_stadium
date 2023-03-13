/* eslint-disable prettier/prettier */

import { Column, DataType, Model, Table } from "sequelize-typescript";

interface RegionAttrs {
    name: string;
}

@Table({ tableName: "region" })
export class Region extends Model<Region, RegionAttrs> {
    @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING })
    name: string;

    // @BelongsToMany(() => Role, () => UserRole)
    // role: Role[];
}
