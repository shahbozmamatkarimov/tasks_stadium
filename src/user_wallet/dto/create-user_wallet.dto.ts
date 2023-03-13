import { IsDate, IsNotEmpty, IsNumber } from "class-validator";

export class CreateUserWalletDto {
    // @ApiProperty({ example: 'User1', description: 'Foydalanuvchi ismi' })
    @IsNotEmpty()
    @IsNumber()
    readonly user_id: number;

    // @ApiProperty({ example: 'User1', description: 'Foydalanuvchi ismi' })
    @IsNotEmpty()
    @IsNumber()
    readonly wallet: number;
}