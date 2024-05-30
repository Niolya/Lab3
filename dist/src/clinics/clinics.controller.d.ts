import { ClinicsService } from 'src/clinics/clinics.service';
import { Clinic } from 'src/clinics/clinic.entity';
import { CreateClinicDto } from './dto/clinic.dto';
export declare class ClinicsController {
    private readonly clinicsService;
    constructor(clinicsService: ClinicsService);
    findAll(): Promise<Clinic[]>;
    findIncomplete(): Promise<import("./dto/incomplete-clinic.dto").IncompleteClinicDto[]>;
    findOne(id: string): Promise<Clinic>;
    update(id: string, updateClinic: Clinic): Promise<Clinic>;
    create(clinic: CreateClinicDto): Promise<Clinic>;
    remove(id: string): void;
}
