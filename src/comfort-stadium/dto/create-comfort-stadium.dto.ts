/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateComfortStadiumDto {
    // @ApiProperty({ example: 'User1', description: 'Foydalanuvchi ismi' })
    @IsNotEmpty()
    @IsNumber()
    readonly stadium_id: number;
    
    // @ApiProperty({ example: 'User1', description: 'Foydalanuvchi ismi' })
    @IsNotEmpty()
    @IsNumber()
    readonly comfort_id: number;
}