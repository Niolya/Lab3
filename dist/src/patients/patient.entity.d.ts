import { Doctor } from 'src/doctors/doctor.entity';
export declare class Patient {
    id: number;
    fullname: string;
    room: number;
    doctors: Doctor[];
}
