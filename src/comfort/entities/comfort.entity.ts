/* eslint-disable prettier/prettier */

import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { ComfortStadium } from "../../comfort-stadium/entities/comfort-stadium.entity";

interface ComfortAttrs {
    name: string;
}

@Table({ tableName: "comfort" })
export class Comfort extends Model<Comfort, ComfortAttrs> {
    @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING })
    name: string;

    @HasMany(() => ComfortStadium)
    ComfortStadium: ComfortStadium[];
}
