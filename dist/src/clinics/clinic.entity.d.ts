import { Doctor } from 'src/doctors/doctor.entity';
export declare class Clinic {
    id: number;
    address: string;
    phone: string;
    doctors: Doctor[];
}
