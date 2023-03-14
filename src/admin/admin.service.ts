/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, BadRequestException, HttpException, HttpStatus } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entities/admin.entity';
import { InjectModel } from '@nestjs/sequelize/dist';

@Injectable()
export class AdminService {
    constructor(@InjectModel(Admin) private adminRepo: typeof Admin,
        private readonly adminService: AdminService) { };


    async create(createAdminDto: CreateAdminDto) {
        return this.adminRepo.create(createAdminDto);
    }

    async findAll() {
        return await this.adminRepo.findAll({ include: { all: true } });
    }

    async findOne(id: number) {
        const user = await this.adminRepo.findOne({ where: { id }, include: { all: true } });
        return user;
    }

    async update(id: number, updateAdminDto: UpdateAdminDto) {
        const user = await this.adminRepo.update({ ...updateAdminDto }, { where: { id }, returning: true });
        return user[1][0];
    }

    async remove(id: number) {
        const user = await this.adminRepo.destroy({ where: { id } });
        if (!user) throw new HttpException("User not found", HttpStatus.NOT_FOUND);
        return { message: "User deleted" };
    }
}
