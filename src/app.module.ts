import { Module } from '@nestjs/common';
import { DoctorsModule } from './doctors/doctors.module';
import { PatientsModule } from './patients/patients.module';
import { ClinicsModule } from './clinics/clinics.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    DoctorsModule, 
    PatientsModule, 
    ClinicsModule, 
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      username: 'education',
      password: 'password',
      host: 'localhost',
      synchronize: false,
      logging: 'all',
      entities: ['dist/**/*.entity{.ts,.js}'],
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
