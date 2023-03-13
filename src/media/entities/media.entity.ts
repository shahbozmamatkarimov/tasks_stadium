/* eslint-disable prettier/prettier */

import { Column, DataType, Model, Table } from "sequelize-typescript";

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

    @Column({ type: DataType.INTEGER })
    stadium_id: number;

    // @BelongsToMany(() => Role, () => UserRole)
    // role: Role[];
}
