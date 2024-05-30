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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Patient = void 0;
const doctor_entity_1 = require("../doctors/doctor.entity");
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let Patient = class Patient {
};
exports.Patient = Patient;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Уникальный идентификатор' }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Patient.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Иванов Иван Иванович', description: 'ФИО' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Patient.prototype, "fullname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 203, description: 'Номер палаты' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Patient.prototype, "room", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Врачи, закреплённые за пациентом' }),
    (0, typeorm_1.ManyToMany)((type) => doctor_entity_1.Doctor, (doctor) => doctor.patients),
    (0, typeorm_1.JoinTable)({
        name: 'doctor_patient',
        joinColumn: { name: 'patient_id' },
        inverseJoinColumn: { name: 'doctor_id' },
    }),
    __metadata("design:type", Array)
], Patient.prototype, "doctors", void 0);
exports.Patient = Patient = __decorate([
    (0, typeorm_1.Entity)('patients')
], Patient);
//# sourceMappingURL=patient.entity.js.map