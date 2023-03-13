/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, IsEmail, IsBoolean, IsDate } from "class-validator";

export class CreateUserDto {
    // @ApiProperty({ example: 'User1', description: 'Foydalanuvchi ismi' })
    @IsNotEmpty()
    @IsString()
    readonly first_name: string;

    // @ApiProperty({ example: 'User1', description: 'Foydalanuvchi ismi' })
    @IsNotEmpty()
    @IsString()
    readonly last_name: string;

    // @ApiProperty({ example: 'User1', description: 'Foydalanuvchi ismi' })
    @IsNotEmpty()
    @IsString()
    readonly username: string;

    // @ApiProperty({ example: 'User1', description: 'Foydalanuvchi ismi' })
    @IsNotEmpty()
    @IsString()
    readonly hashed_password: string;

    // @ApiProperty({ example: 'User1', description: 'Foydalanuvchi ismi' })
    @IsNotEmpty()
    @IsString()
    readonly telegram_link: string;

    // @ApiProperty({ example: 'User1', description: 'Foydalanuvchi ismi' })
    @IsEmail()
    readonly email: string;

    // @ApiProperty({ example: 'User1', description: 'Foydalanuvchi ismi' })
    @IsNotEmpty()
    @IsString()
    readonly phone: string;


    // @ApiProperty({ example: 'User1', description: 'Foydalanuvchi ismi' })
    @IsNotEmpty()
    @IsString()
    readonly user_photo: string;

    // @ApiProperty({ example: 'User1', description: 'Foydalanuvchi ismi' })
    @IsDate()
    @IsNotEmpty()
    readonly birthday: Date;

    // @ApiProperty({ example: 'User1', description: 'Foydalanuvchi ismi' })
    @IsBoolean()
    readonly is_active: boolean;


    // @ApiProperty({ example: 'User1', description: 'Foydalanuvchi ismi' })
    @IsBoolean()
    readonly is_owner: boolean;

    // @ApiProperty({ example: 'User1', description: 'Foydalanuvchi ismi' })
    @IsNotEmpty()
    @IsString()
    readonly hashed_refresh_token: string;
}

