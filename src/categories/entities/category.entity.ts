/* eslint-disable prettier/prettier */

import { Column, DataType, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Stadium } from "../../stadiums/entities/stadium.entity";

interface CategoryAttrs {
    name: string;
}

@Table({ tableName: "category" })
export class Category extends Model<Category, CategoryAttrs> {
    @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING })
    name: string;

    // @ForeignKey(() => Region)
    @Column({ type: DataType.INTEGER })
    parent_id: number;

    // @BelongsToMany(() => Role, () => UserRole)
    // role: Role[];
    
    @HasMany(() => Stadium)
    stadium: Stadium[];
}
