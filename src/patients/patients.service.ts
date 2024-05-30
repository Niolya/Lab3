import { HttpStatus, Injectable } from '@nestjs/common';
import { Doctor } from 'src/doctors/doctor.entity';
import { Patient } from 'src/patients/patient.entity';
import { CreatePatientDto } from 'src/patients/dto/patient.dto';
import { IncompletePatientDto } from 'src/patients/dto/incomplete-patient.dto';
import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class PatientsService {
    constructor(
        @InjectRepository(Doctor)
        private readonly doctorRepository: Repository<Doctor>,
        @InjectRepository(Patient)
        private readonly patientRepository: Repository<Patient>
    ) {}

    // CRUD
    // create
    async create(patientDto: CreatePatientDto): Promise<Patient> {
        const patient = this.patientRepository.create();
        patient.fullname = patientDto.fullname;
        patient.room = patientDto.room;

        const doctors = await this.doctorRepository.findBy({
            id: In(patientDto.doctors),
        });
        patient.doctors = doctors;

        await this.patientRepository.save(patient);
        return patient;
    }
    
    // read (all)
    async findAll(): Promise<Patient[]> {
        const patients = await this.patientRepository.find({
            relations: { doctors: true }
        });
        return patients;
    }

    // read (incomplete)
    async findIncomplete(): Promise<IncompletePatientDto[]> {
        const patients = await this.patientRepository.find();
        const incompletePatients: IncompletePatientDto[] = patients.map((patient) => {
            const incompletePatient = new IncompletePatientDto();
            incompletePatient.id = patient.id;
            incompletePatient.fullname = patient.fullname;
            incompletePatient.room = patient.room;
            return incompletePatient;
        });
        return incompletePatients;
    }

    // read
    findOne(id: number): Promise<Patient> {
        return this.patientRepository.findOne({
            where: { id },
            relations: { doctors: true }
        });
    }

    // update
    async update(id: number, updatedPatient: Patient) {
        const patient = await this.patientRepository.findOne({ where: { id } });
        patient.fullname = updatedPatient.fullname;
        patient.room = updatedPatient.room;
        await this.patientRepository.save(patient);
        return patient;
    }

    // delete
    remove(id: number) {
        this.patientRepository.delete({ id });
    }
}