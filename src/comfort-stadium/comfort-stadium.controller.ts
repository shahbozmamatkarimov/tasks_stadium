import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComfortStadiumService } from './comfort-stadium.service';
import { CreateComfortStadiumDto } from './dto/create-comfort-stadium.dto';
import { UpdateComfortStadiumDto } from './dto/update-comfort-stadium.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Admin')
@Controller('comfort-stadium')
export class ComfortStadiumController {
  constructor(private readonly comfortStadiumService: ComfortStadiumService) { }

  @ApiOperation({ summary: 'POST', description: 'Create Admin' })
  @Post()
  create(@Body() createComfortStadiumDto: CreateComfortStadiumDto) {
    return this.comfortStadiumService.create(createComfortStadiumDto);
  }

  @ApiOperation({ summary: 'GET', description: 'Get All Admin' })
  @Get()
  findAll() {
    return this.comfortStadiumService.findAll();
  }

  @ApiOperation({ summary: 'POST', description: 'Create role' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comfortStadiumService.findOne(+id);
  }

  @ApiOperation({ summary: 'PUT', description: 'Update Admin' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComfortStadiumDto: UpdateComfortStadiumDto) {
    return this.comfortStadiumService.update(+id, updateComfortStadiumDto);
  }

  @ApiOperation({ summary: 'Delete', description: 'Delete Admin' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comfortStadiumService.remove(+id);
  }
}
