/* eslint-disable prettier/prettier */
import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { District } from "../../district/entities/district.entity";
import { Region } from "../../region/entities/region.entity";
import { Category } from "../../categories/entities/category.entity";
import { Media } from "../../media/entities/media.entity";
import { ComfortStadium } from "../../comfort-stadium/entities/comfort-stadium.entity";
import { StadiumTime } from "../../stadium_times/entities/stadium_time.entity";
import { Comment } from "../../comments/entities/comment.entity";
import { User } from "../../users/models/user.model";

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

    @ForeignKey(() => Category)
    @Column({ type: DataType.NUMBER })
    category_id: number;

    @ForeignKey(() => User)
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

    @ForeignKey(() => Region)
    @Column({ type: DataType.INTEGER })
    region_id: number;

    @ForeignKey(() => District)
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

    @HasMany(() => Media)
    media: Media[];

    @HasMany(()=> ComfortStadium)
    comfortStadium: ComfortStadium[];

    @HasMany(()=> StadiumTime)
    stadiumTime: StadiumTime[];

    @HasMany(()=> Comment)
    comment: Comment[];
    
    @BelongsTo(() => Category)
    role: Category[];

    @BelongsTo(() => Region)
    Region: Region[];
    
    @BelongsTo(() => District)
    District: District[];
}
