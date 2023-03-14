/* eslint-disable prettier/prettier */

import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { District } from "../../district/entities/district.entity";
import { Stadium } from "../../stadiums/entities/stadium.entity";

interface RegionAttrs {
    name: string;
}

@Table({ tableName: "region" })
export class Region extends Model<Region, RegionAttrs> {
    @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
    id: number;
    
    @Column({ type: DataType.STRING })
    name: string;

    @HasMany(()=>District)
    district: District[];

    @HasMany(()=>Stadium)
    stadium: Stadium[];
}
