import { ClinicsService } from 'src/clinics/clinics.service';
import { Body, Controller, Get, Put, Param, Post, Delete} from '@nestjs/common';
import { Clinic } from 'src/clinics/clinic.entity';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateClinicDto } from './dto/clinic.dto';

@Controller('clinics')
@ApiTags('Филиалы')
export class ClinicsController {
    constructor(private readonly clinicsService: ClinicsService) {}

    @ApiOperation({ summary: 'Получение информации о всех филиалах' })
    @Get()
    findAll() {
        return this.clinicsService.findAll();
    }

    @ApiOperation({ summary: 'Получение неполной информации о всех филиалах' })
    @Get('incomplete')
    findIncomplete() {
        return this.clinicsService.findIncomplete();
    }

    @ApiOperation({ summary: 'Получение информации о конкретном филиале' })
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.clinicsService.findOne(+id);
    }

    @ApiOperation({ summary: 'Обновление информации о филиале' })
    @Put(':id')
    update(@Param('id') id: string, @Body() updateClinic: Clinic) {
        return this.clinicsService.update(+id, updateClinic);
    }

    @ApiOperation({ summary: 'Добавление филиала' })
    @Post()
    create(@Body() clinic: CreateClinicDto) {
        return this.clinicsService.create(clinic);
    }

    @ApiOperation({ summary: 'Удаление филиала' })
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.clinicsService.remove(+id);
    }
}
