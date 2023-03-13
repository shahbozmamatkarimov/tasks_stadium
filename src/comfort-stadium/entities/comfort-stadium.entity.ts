/* eslint-disable prettier/prettier */
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ComfortStadiumAttrs {
    stadium_id: number;
    comfort_id: number;
}

@Table({ tableName: "comfortStadium" })
export class ComfortStadium extends Model<ComfortStadium, ComfortStadiumAttrs> {
    @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.INTEGER })
    stadium_id: number;

    @Column({ type: DataType.INTEGER })
    comfort_id: number;

    // @BelongsToMany(() => Role, () => UserRole)
    // role: Role[];
}
