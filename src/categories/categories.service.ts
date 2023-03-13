/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(@InjectModel(Category) private categoriesRepo: typeof Category,
    private readonly categoriesService: CategoriesService) { };

  async create(createCategoriesDto: CreateCategoryDto) {
    return await this.categoriesRepo.create(createCategoriesDto);
  }

  async findAll() {
    return await this.categoriesRepo.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const categories = await this.categoriesRepo.findOne({ where: { id }, include: { all: true } });
    return categories;
  }

  async update(id: number, updateCategoriesDto: UpdateCategoryDto) {
    const categories = await this.categoriesRepo.update({ ...updateCategoriesDto }, { where: { id }, returning: true });
    return categories[1][0];
  }

  async remove(id: number) {
    const categories = await this.categoriesRepo.destroy({ where: { id } });
    if (!categories) throw new HttpException("Categories not found", HttpStatus.NOT_FOUND);
    return { message: "Categories deleted" };
  }
}
