/* eslint-disable prettier/prettier */

import { Column, DataType, Model, Table } from "sequelize-typescript";

interface DistrictAttrs {
    name: string;
}

@Table({ tableName: "district" })
export class District extends Model<District, DistrictAttrs> {
    @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING })
    name: string;

    @Column({ type: DataType.INTEGER})
    regiion_id: number;

    // @BelongsToMany(() => Role, () => UserRole)
    // role: Role[];
}
