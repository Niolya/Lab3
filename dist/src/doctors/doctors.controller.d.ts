import { DoctorsService } from 'src/doctors/doctors.service';
import { Doctor } from 'src/doctors/doctor.entity';
import { CreateDoctorDto } from './dto/doctor.dto';
export declare class DoctorsController {
    private readonly doctorsService;
    constructor(doctorsService: DoctorsService);
    findAll(): Promise<Doctor[]>;
    findIncomplete(): Promise<import("./dto/incomplete-doctor.dto").IncompleteDoctorDto[]>;
    findOne(id: string): Promise<Doctor>;
    update(id: string, updateDoctor: Doctor): Promise<Doctor>;
    create(doctor: CreateDoctorDto): Promise<Doctor>;
    remove(id: string): void;
}
