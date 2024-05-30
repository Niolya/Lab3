import { Doctor } from 'src/doctors/doctor.entity';
import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('patients')
export class Patient {
  @ApiProperty({ example: 1, description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Иванов Иван Иванович', description: 'ФИО' })
  @Column()
  fullname: string;

  @ApiProperty({ example: 203, description: 'Номер палаты' })
  @Column()
  room: number;

  @ApiProperty({ description: 'Врачи, закреплённые за пациентом' })
  @ManyToMany((type) => Doctor, (doctor) => doctor.patients)
  @JoinTable({
    name: 'doctor_patient',
    joinColumn: { name: 'patient_id' },
    inverseJoinColumn: { name: 'doctor_id' },
  })
  doctors: Doctor[];
}
