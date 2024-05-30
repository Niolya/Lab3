import { Patient } from 'src/patients/patient.entity';
import { Clinic } from 'src/clinics/clinic.entity';
import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('doctors')
export class Doctor {
  @ApiProperty({ example: 1, description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Иванов Иван Иванович', description: 'ФИО' })
  @Column({})
  fullname: string;

  @ApiProperty({ example: 'Главврач', description: 'Должность' })
  @Column()
  position: string;
  
  
  @ApiProperty({ description: 'Пациенты, закреплённые за врачом' })
  @ManyToMany((type) => Patient, (patient) => patient.doctors)
  @JoinTable({
    name: 'doctor_patient',
    joinColumn: { name: 'doctor_id' },
    inverseJoinColumn: { name: 'patient_id' },
  })
  patients: Patient[];

  @ApiProperty({ description: 'Филиалы, в которых работает врач' })
  @ManyToMany((type) => Clinic, (clinic) => clinic.doctors)
  @JoinTable({
    name: 'doctor_clinic',
    joinColumn: { name: 'doctor_id' },
    inverseJoinColumn: { name: 'clinic_id' },
  })
  clinics: Clinic[];
}
