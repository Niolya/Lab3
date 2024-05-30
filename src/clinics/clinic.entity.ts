import { Doctor } from 'src/doctors/doctor.entity';
import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('clinics')
export class Clinic {
  @ApiProperty({ example: 1, description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Ленинский проспект, дом 4', description: 'Адрес' })
  @Column()
  address: string;

  @ApiProperty({ example: '8 (800) 555-35-35', description: 'Номер ' })
  @Column()
  phone: string;

  @ApiProperty({ description: 'Врачи, работающие в данном филиале' })
  @ManyToMany((type) => Doctor, (doctor) => doctor.clinics)
  @JoinTable({
    name: 'doctor_clinic',
    joinColumn: { name: 'clinic_id' },
    inverseJoinColumn: { name: 'doctor_id' },
  })
  doctors: Doctor[];
}
