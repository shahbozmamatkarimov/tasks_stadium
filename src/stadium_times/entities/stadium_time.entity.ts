/* eslint-disable prettier/prettier */
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface StadiumTimeAttrs {
    stadium_id: number;
    start_time: Date;
    end_time: Date;
    price: number;
}

@Table({ tableName: "stadiumtime" })
export class StadiumTime extends Model<StadiumTime, StadiumTimeAttrs> {
    @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.INTEGER })
    stadium_id: number;

    @Column({ type: DataType.DATE })
    start_time: number;

    @Column({ type: DataType.DATE })
    end_time: string;

    @Column({ type: DataType.NUMBER })
    price: number;

    // @BelongsToMany(() => Role, () => UserRole)
    // role: Role[];
}
