/* eslint-disable prettier/prettier */
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Stadium } from "../../stadiums/entities/stadium.entity";
import { Comfort } from "../../comfort/entities/comfort.entity";

interface ComfortStadiumAttrs {
    stadium_id: number;
    comfort_id: number;
}

@Table({ tableName: "comfortStadium" })
export class ComfortStadium extends Model<ComfortStadium, ComfortStadiumAttrs> {
    @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
    id: number;

    @ForeignKey(() => Stadium)
    @Column({ type: DataType.INTEGER })
    stadium_id: number;

    @ForeignKey(() => Comfort)
    @Column({ type: DataType.INTEGER })
    comfort_id: number;

    @BelongsTo(() => Stadium)
    stadium: Stadium[];
    
    @BelongsTo(() => Comfort)
    comfort: Comfort[];

    // HasMany(() => District)
    // district: District[];
}
