/* eslint-disable prettier/prettier */
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface StadiumAttrs {
    category_id: number;
    owner_id: number;
    contact_with: string;
    name: string;
    volume: string;
    address: string;
    region_id: number;
    district_id: number;
    location: string;
    buildAt: Date;
    start_time: Date;
    end_time: Date;
}

@Table({ tableName: "stadiums" })
export class Stadium extends Model<Stadium, StadiumAttrs> {
    @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.NUMBER })
    category_id: number;

    @Column({ type: DataType.STRING })
    owner_id: number;

    @Column({ type: DataType.STRING })
    contact_with: string;

    @Column({ type: DataType.STRING })
    name: string;

    @Column({ type: DataType.STRING })
    volume: string;

    @Column({ type: DataType.STRING })
    address: string;

    @Column({ type: DataType.INTEGER })
    region_id: number;

    @Column({ type: DataType.INTEGER })
    district_id: number;

    @Column({ type: DataType.STRING })
    location: string;

    @Column({ type: DataType.DATE })
    buildAt: Date;

    @Column({ type: DataType.DATE })
    start_time: Date;

    @Column({ type: DataType.DATE })
    end_time: Date;

    // @BelongsToMany(() => Role, () => StadiumRole)
    // role: Role[];
}
