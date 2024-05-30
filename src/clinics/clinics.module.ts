import { Module } from '@nestjs/common';
import { ClinicsService } from './clinics.service';
import { ClinicsController } from './clinics.controller';
import { Clinic } from 'src/clinics/clinic.entity';
import { Doctor } from 'src/doctors/doctor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ClinicsController],
  providers: [ClinicsService],
  imports: [TypeOrmModule.forFeature([Doctor, Clinic])]
})
export class ClinicsModule {}
