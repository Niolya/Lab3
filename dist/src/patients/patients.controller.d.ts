import { PatientsService } from 'src/patients/patients.service';
import { Patient } from 'src/patients/patient.entity';
import { CreatePatientDto } from './dto/patient.dto';
export declare class PatientsController {
    private readonly patientsService;
    constructor(patientsService: PatientsService);
    findAll(): Promise<Patient[]>;
    findIncomplete(): Promise<import("./dto/incomplete-patient.dto").IncompletePatientDto[]>;
    findOne(id: string): Promise<Patient>;
    update(id: string, updatePatient: Patient): Promise<Patient>;
    create(patient: CreatePatientDto): Promise<Patient>;
    remove(id: string): void;
}
