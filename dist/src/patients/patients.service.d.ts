import { Doctor } from 'src/doctors/doctor.entity';
import { Patient } from 'src/patients/patient.entity';
import { CreatePatientDto } from 'src/patients/dto/patient.dto';
import { IncompletePatientDto } from 'src/patients/dto/incomplete-patient.dto';
import { Repository } from 'typeorm';
export declare class PatientsService {
    private readonly doctorRepository;
    private readonly patientRepository;
    constructor(doctorRepository: Repository<Doctor>, patientRepository: Repository<Patient>);
    create(patientDto: CreatePatientDto): Promise<Patient>;
    findAll(): Promise<Patient[]>;
    findIncomplete(): Promise<IncompletePatientDto[]>;
    findOne(id: number): Promise<Patient>;
    update(id: number, updatedPatient: Patient): Promise<Patient>;
    remove(id: number): void;
}
