import { PatientsService } from 'src/patients/patients.service';
import { Body, Controller, Get, Put, Param, Post, Delete} from '@nestjs/common';
import { Patient } from 'src/patients/patient.entity';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreatePatientDto } from './dto/patient.dto';

@Controller('patients')
@ApiTags('Пациенты')
export class PatientsController {
    constructor(private readonly patientsService: PatientsService) {}

    @ApiOperation({ summary: 'Получение информации о всех пациентах' })
    @Get()
    findAll() {
        return this.patientsService.findAll();
    }

    @ApiOperation({ summary: 'Получение неполной информации о всех пациентах' })
    @Get('incomplete')
    findIncomplete() {
        return this.patientsService.findIncomplete();
    }

    @ApiOperation({ summary: 'Получение информации о конкретном пациенте' })
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.patientsService.findOne(+id);
    }

    @ApiOperation({ summary: 'Обновление информации о пациенте' })
    @Put(':id')
    update(@Param('id') id: string, @Body() updatePatient: Patient) {
        return this.patientsService.update(+id, updatePatient);
    }

    @ApiOperation({ summary: 'Добавление пациента' })
    @Post()
    create(@Body() patient: CreatePatientDto) {
        return this.patientsService.create(patient);
    }

    @ApiOperation({ summary: 'Удаление пациента' })
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.patientsService.remove(+id);
    }
}
