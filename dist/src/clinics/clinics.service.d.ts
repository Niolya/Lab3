import { Doctor } from 'src/doctors/doctor.entity';
import { Clinic } from 'src/clinics/clinic.entity';
import { CreateClinicDto } from 'src/clinics/dto/clinic.dto';
import { IncompleteClinicDto } from 'src/clinics/dto/incomplete-clinic.dto';
import { Repository } from 'typeorm';
export declare class ClinicsService {
    private readonly authorRepository;
    private readonly clinicRepository;
    constructor(authorRepository: Repository<Doctor>, clinicRepository: Repository<Clinic>);
    create(clinicDto: CreateClinicDto): Promise<Clinic>;
    findAll(): Promise<Clinic[]>;
    findIncomplete(): Promise<IncompleteClinicDto[]>;
    findOne(id: number): Promise<Clinic>;
    update(id: number, updatedClinic: Clinic): Promise<Clinic>;
    remove(id: number): void;
}
