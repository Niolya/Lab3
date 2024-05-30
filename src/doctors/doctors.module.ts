import { Module } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { DoctorsController } from './doctors.controller';
import { Patient } from 'src/patients/patient.entity';
import { Clinic } from 'src/clinics/clinic.entity';
import { Doctor } from 'src/doctors/doctor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [DoctorsController],
  providers: [DoctorsService],
  imports: [TypeOrmModule.forFeature([Doctor, Patient, Clinic])]
})
export class DoctorsModule {}

