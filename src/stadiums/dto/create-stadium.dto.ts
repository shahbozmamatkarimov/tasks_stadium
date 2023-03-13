/* eslint-disable prettier/prettier */
import { IsDate, IsNotEmpty, IsNumber, IsString, IsTimeZone } from "class-validator";
import { DataType } from "sequelize";

export class CreateStadiumDto {
    // @ApiProperty({ example: 'User1', description: 'Foydalanuvchi ismi' })
    @IsNotEmpty()
    @IsNumber()
    readonly category_id: number;

    // @ApiProperty({ example: 'User1', description: 'Foydalanuvchi ismi' })
    @IsNotEmpty()
    @IsNumber()
    readonly owner_id: number;

    // @ApiProperty({ example: 'User1', description: 'Foydalanuvchi ismi' })
    @IsNotEmpty()
    @IsString()
    readonly contact_with: string;

    // @ApiProperty({ example: 'User1', description: 'Foydalanuvchi ismi' })
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    // @ApiProperty({ example: 'User1', description: 'Foydalanuvchi ismi' })
    @IsNotEmpty()
    @IsString()
    readonly volume: string;

    // @ApiProperty({ example: 'User1', description: 'Foydalanuvchi ismi' })
    @IsNotEmpty()
    @IsString()
    readonly address: string;

    // @ApiProperty({ example: 'User1', description: 'Foydalanuvchi ismi' })
    @IsNotEmpty()
    @IsNumber()
    readonly region_id: number;

    // @ApiProperty({ example: 'User1', description: 'Foydalanuvchi ismi' })
    @IsNotEmpty()
    @IsNumber()
    readonly district_id: number;

    // @ApiProperty({ example: 'User1', description: 'Foydalanuvchi ismi' })
    @IsNotEmpty()
    @IsString()
    readonly location: string;

    // @ApiProperty({ example: 'User1', description: 'Foydalanuvchi ismi' })
    @IsNotEmpty()
    @IsDate()
    readonly buildAt: Date;

    // @ApiProperty({ example: 'User1', description: 'Foydalanuvchi ismi' })
    @IsNotEmpty()
    @IsTimeZone()
    readonly start_time: DataType;

    // @ApiProperty({ example: 'User1', description: 'Foydalanuvchi ismi' })
    @IsNotEmpty()
    @IsTimeZone()
    readonly end_time: DataType;
}
