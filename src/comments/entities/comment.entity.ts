/* eslint-disable prettier/prettier */

import { Column, DataType, Model, Table } from "sequelize-typescript";

interface CommentAttrs {
     user_id: number;
     stadium_id: number;
     impression: string;
}

@Table({ tableName: "comment" })
export class Comment extends Model<Comment, CommentAttrs> {
    @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
    id: number;

    // @ForeignKey(() => Region)
    @Column({ type: DataType.INTEGER })
    user_id: number;

    // @ForeignKey(() => Region)
    @Column({ type: DataType.INTEGER })
    stadium_id: number;

    @Column({ type: DataType.STRING })
    impression: string;

    // @BelongsToMany(() => Role, () => UserRole)
    // role: Role[];

    // HasMany(() => District)
    // district: District[];
}
