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
exports.PatientsService = void 0;
const common_1 = require("@nestjs/common");
const doctor_entity_1 = require("../doctors/doctor.entity");
const patient_entity_1 = require("./patient.entity");
const incomplete_patient_dto_1 = require("./dto/incomplete-patient.dto");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let PatientsService = class PatientsService {
    constructor(doctorRepository, patientRepository) {
        this.doctorRepository = doctorRepository;
        this.patientRepository = patientRepository;
    }
    async create(patientDto) {
        const patient = this.patientRepository.create();
        patient.fullname = patientDto.fullname;
        patient.room = patientDto.room;
        const doctors = await this.doctorRepository.findBy({
            id: (0, typeorm_1.In)(patientDto.doctors),
        });
        patient.doctors = doctors;
        await this.patientRepository.save(patient);
        return patient;
    }
    async findAll() {
        const patients = await this.patientRepository.find({
            relations: { doctors: true }
        });
        return patients;
    }
    async findIncomplete() {
        const patients = await this.patientRepository.find();
        const incompletePatients = patients.map((patient) => {
            const incompletePatient = new incomplete_patient_dto_1.IncompletePatientDto();
            incompletePatient.id = patient.id;
            incompletePatient.fullname = patient.fullname;
            incompletePatient.room = patient.room;
            return incompletePatient;
        });
        return incompletePatients;
    }
    findOne(id) {
        return this.patientRepository.findOne({
            where: { id },
            relations: { doctors: true }
        });
    }
    async update(id, updatedPatient) {
        const patient = await this.patientRepository.findOne({ where: { id } });
        patient.fullname = updatedPatient.fullname;
        patient.room = updatedPatient.room;
        await this.patientRepository.save(patient);
        return patient;
    }
    remove(id) {
        this.patientRepository.delete({ id });
    }
};
exports.PatientsService = PatientsService;
exports.PatientsService = PatientsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(doctor_entity_1.Doctor)),
    __param(1, (0, typeorm_2.InjectRepository)(patient_entity_1.Patient)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], PatientsService);
//# sourceMappingURL=patients.service.js.map