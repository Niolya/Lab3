"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorsService = void 0;
const common_1 = require("@nestjs/common");
const clinic_entity_1 = require("../clinics/clinic.entity");
const patient_entity_1 = require("../patients/patient.entity");
const doctor_entity_1 = require("./doctor.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const incomplete_doctor_dto_1 = require("./dto/incomplete-doctor.dto");
let DoctorsService = class DoctorsService {
    constructor(patientRepository, doctorRepository, clinicRepository) {
        this.patientRepository = patientRepository;
        this.doctorRepository = doctorRepository;
        this.clinicRepository = clinicRepository;
    }
    async create(doctorDto) {
        const doctor = this.doctorRepository.create();
        doctor.fullname = doctorDto.fullname;
        doctor.position = doctorDto.position;
        const clinics = await this.clinicRepository.findBy({
            id: (0, typeorm_1.In)(doctorDto.clinics),
        });
        doctor.clinics = clinics;
        await this.doctorRepository.save(doctor);
        return doctor;
    }
    async findAll() {
        const doctors = await this.doctorRepository.find({
            relations: { patients: true, clinics: true, }
        });
        return doctors;
    }
    async findIncomplete() {
        const doctors = await this.doctorRepository.find();
        const incompleteDoctors = doctors.map((doctor) => {
            const incompleteDoctor = new incomplete_doctor_dto_1.IncompleteDoctorDto();
            incompleteDoctor.id = doctor.id;
            incompleteDoctor.fullname = doctor.fullname;
            incompleteDoctor.position = doctor.position;
            return incompleteDoctor;
        });
        return incompleteDoctors;
    }
    findOne(id) {
        return this.doctorRepository.findOne({
            where: { id },
            relations: { patients: true, clinics: true, }
        });
    }
    async update(id, updatedDoctor) {
        const doctor = await this.doctorRepository.findOne({ where: { id } });
        doctor.fullname = updatedDoctor.fullname;
        doctor.position = updatedDoctor.position;
        doctor.clinics = updatedDoctor.clinics;
        doctor.patients = updatedDoctor.patients;
        await this.doctorRepository.save(doctor);
        return doctor;
    }
    remove(id) {
        this.doctorRepository.delete({ id });
    }
};
exports.DoctorsService = DoctorsService;
exports.DoctorsService = DoctorsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(patient_entity_1.Patient)),
    __param(1, (0, typeorm_2.InjectRepository)(doctor_entity_1.Doctor)),
    __param(2, (0, typeorm_2.InjectRepository)(clinic_entity_1.Clinic)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], DoctorsService);
//# sourceMappingURL=doctors.service.js.map