import { Patient } from 'src/patients/patient.entity';
import { Clinic } from 'src/clinics/clinic.entity';
export declare class Doctor {
    id: number;
    fullname: string;
    position: string;
    patients: Patient[];
    clinics: Clinic[];
}
