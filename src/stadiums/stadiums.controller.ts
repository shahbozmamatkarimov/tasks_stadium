/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StadiumsService } from './stadiums.service';
import { CreateStadiumDto } from './dto/create-stadium.dto';
import { UpdateStadiumDto } from './dto/update-stadium.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Admin')
@Controller('stadiums')
export class StadiumsController {
  constructor(private readonly stadiumsService: StadiumsService) { }

  @ApiOperation({ summary: 'POST', description: 'Create Admin' })
  @Post()
  create(@Body() createStadiumDto: CreateStadiumDto) {
    return this.stadiumsService.create(createStadiumDto);
  }

  @ApiOperation({ summary: 'GET', description: 'Get All Admin' })
  @Get()
  findAll() {
    return this.stadiumsService.findAll();
  }

  @ApiOperation({ summary: 'POST', description: 'Create role' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stadiumsService.findOne(+id);
  }

  //   @ApiOperation({ summary: 'PUT', description: 'Update Admin' })
  @Patch(':id')
  // update(@Param('id') id: string, @Body() updateStadiumDto: UpdateStadiumDto) {
  //   return this.stadiumsService.update(+id, updateStadiumDto);
  // }

  @ApiOperation({ summary: 'Delete', description: 'Delete Admin' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stadiumsService.remove(+id);
  }
}
