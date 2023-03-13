/* eslint-disable prettier/prettier */
import { IsDate, IsNotEmpty, IsNumber } from "class-validator";

export class CreateStadiumTimeDto {
    // @ApiProperty({ example: 'User1', description: 'Foydalanuvchi ismi' })
    @IsNotEmpty()
    @IsNumber()
    readonly stadium_id: number;

    
    // @ApiProperty({ example: 'User1', description: 'Foydalanuvchi ismi' })
    @IsNotEmpty()
    @IsDate()
    readonly start_time: Date;

    
    
    // @ApiProperty({ example: 'User1', description: 'Foydalanuvchi ismi' })
    @IsNotEmpty()
    @IsDate()
    readonly end_time: Date;

    // @ApiProperty({ example: 'User1', description: 'Foydalanuvchi ismi' })
    @IsNotEmpty()
    @IsNumber()
    readonly price: number;
}

