/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateDistrictDto {
    // @ApiProperty({ example: 'User1', description: 'Foydalanuvchi ismi' })
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsNumber()
    readonly region_id: number;
}

