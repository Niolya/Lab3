import { HttpStatus, Injectable } from '@nestjs/common';
import { Doctor } from 'src/doctors/doctor.entity';
import { Clinic } from 'src/clinics/clinic.entity';
import { CreateClinicDto } from 'src/clinics/dto/clinic.dto';
import { IncompleteClinicDto } from 'src/clinics/dto/incomplete-clinic.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ClinicsService {
    constructor(
        @InjectRepository(Doctor)
        private readonly authorRepository: Repository<Doctor>,
        @InjectRepository(Clinic)
        private readonly clinicRepository: Repository<Clinic>
    ) {}

    // CRUD
    // create
    async create(clinicDto: CreateClinicDto): Promise<Clinic> {
        const clinic = this.clinicRepository.create();
        clinic.address = clinicDto.address;
        clinic.phone = clinicDto.phone;

        await this.clinicRepository.save(clinic);
        return clinic;
    }
    
    // read (all)
    async findAll(): Promise<Clinic[]> {
        const clinics = await this.clinicRepository.find({
            relations: { doctors: true }
        });
        return clinics;
    }
    
    // read (incomplete)
    async findIncomplete(): Promise<IncompleteClinicDto[]> {
        const clinics = await this.clinicRepository.find();
        const incompleteClinics: IncompleteClinicDto[] = clinics.map((clinic) => {
            const incompleteClinic = new IncompleteClinicDto();
            incompleteClinic.id = clinic.id;
            incompleteClinic.address = clinic.address;
            incompleteClinic.phone = clinic.phone;
            return incompleteClinic;
        });
        return incompleteClinics;
    }

    // read
    findOne(id: number): Promise<Clinic> {
        return this.clinicRepository.findOne({
            where: { id },
            relations: { doctors: true }
        });
    }

    // update
    async update(id: number, updatedClinic: Clinic) {
        const clinic = await this.clinicRepository.findOne({ where: { id } });
        clinic.address = updatedClinic.address;
        clinic.phone = updatedClinic.phone;
        clinic.doctors = updatedClinic.doctors;
        await this.clinicRepository.save(clinic);
        return clinic;
    }

    // delete
    remove(id: number) {
        this.clinicRepository.delete({ id });
    }
}