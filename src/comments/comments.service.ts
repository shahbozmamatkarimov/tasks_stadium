/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentsService {
  constructor(@InjectModel(Comment) private commentRepo: typeof Comment,
    private readonly commentService: CommentsService) { };

  async create(createCommentDto: CreateCommentDto) {
    return await this.commentRepo.create(createCommentDto);
  }

  async findAll() {
    return await this.commentRepo.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const comment = await this.commentRepo.findOne({ where: { id }, include: { all: true } });
    return comment;
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    const comment = await this.commentRepo.update({ ...updateCommentDto }, { where: { id }, returning: true });
    return comment[1][0];
  }

  async remove(id: number) {
    const comment = await this.commentRepo.destroy({ where: { id } });
    if (!comment) throw new HttpException("Comment not found", HttpStatus.NOT_FOUND);
    return { message: "Comment deleted" };
  }
}
