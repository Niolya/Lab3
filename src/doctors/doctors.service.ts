import { HttpStatus, Injectable } from '@nestjs/common';
import { Clinic } from 'src/clinics/clinic.entity';
import { Patient } from 'src/patients/patient.entity';
import { Doctor } from 'src/doctors/doctor.entity';
import { CreateDoctorDto } from 'src/doctors/dto/doctor.dto';
import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IncompleteDoctorDto } from './dto/incomplete-doctor.dto';

@Injectable()
export class DoctorsService {
    constructor(
        @InjectRepository(Patient)
        private readonly patientRepository: Repository<Patient>,
        @InjectRepository(Doctor)
        private readonly doctorRepository: Repository<Doctor>,
        @InjectRepository(Clinic)
        private readonly clinicRepository: Repository<Clinic>
    ) {}

    // CRUD
    // create
    async create(doctorDto: CreateDoctorDto): Promise<Doctor> {
        const doctor = this.doctorRepository.create();
        doctor.fullname = doctorDto.fullname;
        doctor.position = doctorDto.position;

        const clinics = await this.clinicRepository.findBy({
            id: In(doctorDto.clinics),
        });
        doctor.clinics = clinics;

        await this.doctorRepository.save(doctor);
        return doctor;
    }
    
    // read (all)
    async findAll(): Promise<Doctor[]> {
        const doctors = await this.doctorRepository.find({
            relations: { patients: true, clinics: true, }
        });
        return doctors;
    }

    // read (incomplete)
    async findIncomplete(): Promise<IncompleteDoctorDto[]> {
        const doctors = await this.doctorRepository.find();
        const incompleteDoctors: IncompleteDoctorDto[] = doctors.map((doctor) => {
            const incompleteDoctor = new IncompleteDoctorDto();
            incompleteDoctor.id = doctor.id;
            incompleteDoctor.fullname = doctor.fullname;
            incompleteDoctor.position = doctor.position;
            return incompleteDoctor;
        });
        return incompleteDoctors;
    }

    // read
    findOne(id: number): Promise<Doctor> {
        return this.doctorRepository.findOne({
            where: { id },
            relations: { patients: true, clinics: true, }
        });
    }

    // update
    async update(id: number, updatedDoctor: Doctor) {
        const doctor = await this.doctorRepository.findOne({ where: { id } });
        doctor.fullname = updatedDoctor.fullname;
        doctor.position = updatedDoctor.position;
        doctor.clinics = updatedDoctor.clinics;
        doctor.patients = updatedDoctor.patients;
        await this.doctorRepository.save(doctor);
        return doctor;
    }

    // delete
    remove(id: number) {
        this.doctorRepository.delete({ id });
    }
}