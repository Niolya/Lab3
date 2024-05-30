import { Module } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { PatientsController } from './patients.controller';
import { Patient } from 'src/patients/patient.entity';
import { Doctor } from 'src/doctors/doctor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [PatientsController],
  providers: [PatientsService],
  imports: [TypeOrmModule.forFeature([Doctor, Patient])]
})
export class PatientsModule {}