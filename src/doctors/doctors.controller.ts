import { DoctorsService } from 'src/doctors/doctors.service';
import { Body, Controller, Get, Put, Param, Post, Delete} from '@nestjs/common';
import { Doctor } from 'src/doctors/doctor.entity';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateDoctorDto } from './dto/doctor.dto';

@Controller('doctors')
@ApiTags('Врачи')
export class DoctorsController {
    constructor(private readonly doctorsService: DoctorsService) {}

    @ApiOperation({ summary: 'Получение информации о всех врачах' })
    @Get()
    findAll() {
        return this.doctorsService.findAll();
    }

    @ApiOperation({ summary: 'Получение неполной информации о всех врачах' })
    @Get('incomplete')
    findIncomplete() {
        return this.doctorsService.findIncomplete();
    }
    
    @ApiOperation({ summary: 'Получение информации о конкретном враче' })
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.doctorsService.findOne(+id);
    }

    @ApiOperation({ summary: 'Обновление информации о враче' })
    @Put(':id')
    update(@Param('id') id: string, @Body() updateDoctor: Doctor) {
        return this.doctorsService.update(+id, updateDoctor);
    }

    @ApiOperation({ summary: 'Добавление врача' })
    @Post()
    create(@Body() doctor: CreateDoctorDto) {
        return this.doctorsService.create(doctor);
    }

    @ApiOperation({ summary: 'Удаление врача' })
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.doctorsService.remove(+id);
    }
}
