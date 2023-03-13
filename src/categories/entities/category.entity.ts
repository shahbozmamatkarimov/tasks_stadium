/* eslint-disable prettier/prettier */

import { Column, DataType, Model, Table } from "sequelize-typescript";

interface CategoryAttrs {
    name: string;
}

@Table({ tableName: "category" })
export class Category extends Model<Category, CategoryAttrs> {
    @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING })
    name: string;

    @Column({ type: DataType.INTEGER })
    parent_id: number;

    // @BelongsToMany(() => Role, () => UserRole)
    // role: Role[];
}
