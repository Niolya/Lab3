import { Clinic } from 'src/clinics/clinic.entity';
import { Patient } from 'src/patients/patient.entity';
import { Doctor } from 'src/doctors/doctor.entity';
import { CreateDoctorDto } from 'src/doctors/dto/doctor.dto';
import { Repository } from 'typeorm';
import { IncompleteDoctorDto } from './dto/incomplete-doctor.dto';
export declare class DoctorsService {
    private readonly patientRepository;
    private readonly doctorRepository;
    private readonly clinicRepository;
    constructor(patientRepository: Repository<Patient>, doctorRepository: Repository<Doctor>, clinicRepository: Repository<Clinic>);
    create(doctorDto: CreateDoctorDto): Promise<Doctor>;
    findAll(): Promise<Doctor[]>;
    findIncomplete(): Promise<IncompleteDoctorDto[]>;
    findOne(id: number): Promise<Doctor>;
    update(id: number, updatedDoctor: Doctor): Promise<Doctor>;
    remove(id: number): void;
}
