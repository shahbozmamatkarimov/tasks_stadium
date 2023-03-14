/* eslint-disable prettier/prettier */

import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Media } from "../../media/entities/media.entity";
import { Region } from "../../region/entities/region.entity";
import { Stadium } from "../../stadiums/entities/stadium.entity";

interface DistrictAttrs {
    name: string;
}

@Table({ tableName: "district" })
export class District extends Model<District, DistrictAttrs> {
    @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING })
    name: string;

    @ForeignKey(() => Region)
    @Column({ type: DataType.INTEGER})
    region_id: number;

    @HasMany(()=> Stadium)
    stadium: Stadium[];

    @BelongsTo(() => Region)
    region: Region[];
}
