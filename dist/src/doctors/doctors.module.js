"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorsModule = void 0;
const common_1 = require("@nestjs/common");
const doctors_service_1 = require("./doctors.service");
const doctors_controller_1 = require("./doctors.controller");
const patient_entity_1 = require("../patients/patient.entity");
const clinic_entity_1 = require("../clinics/clinic.entity");
const doctor_entity_1 = require("./doctor.entity");
const typeorm_1 = require("@nestjs/typeorm");
let DoctorsModule = class DoctorsModule {
};
exports.DoctorsModule = DoctorsModule;
exports.DoctorsModule = DoctorsModule = __decorate([
    (0, common_1.Module)({
        controllers: [doctors_controller_1.DoctorsController],
        providers: [doctors_service_1.DoctorsService],
        imports: [typeorm_1.TypeOrmModule.forFeature([doctor_entity_1.Doctor, patient_entity_1.Patient, clinic_entity_1.Clinic])]
    })
], DoctorsModule);
//# sourceMappingURL=doctors.module.js.map