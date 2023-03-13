/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCategoryDto {
    // @ApiProperty({ example: 'User1', description: 'Foydalanuvchi ismi' })
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    // @ApiProperty({ example: 'User1', description: 'Foydalanuvchi ismi' })
    @IsNotEmpty()
    @IsNumber()
    readonly parent_id: number;
}

