/* eslint-disable prettier/prettier */

import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Stadium } from "../../stadiums/entities/stadium.entity";

interface MediaAttrs {
    name: string;
}

@Table({ tableName: "media" })
export class Media extends Model<Media, MediaAttrs> {
    @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING })
    photo: string;

    @Column({ type: DataType.STRING })
    description: string;

    @ForeignKey(() => Stadium)
    @Column({ type: DataType.INTEGER })
    stadium_id: number;

    @BelongsTo(() => Stadium)
    stadium: Stadium[];
    
    // HasMany(() => District)
    // district: District[];
}
