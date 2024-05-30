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
exports.Clinic = void 0;
const doctor_entity_1 = require("../doctors/doctor.entity");
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let Clinic = class Clinic {
};
exports.Clinic = Clinic;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Уникальный идентификатор' }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Clinic.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ленинский проспект, дом 4', description: 'Адрес' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Clinic.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '8 (800) 555-35-35', description: 'Номер ' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Clinic.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Врачи, работающие в данном филиале' }),
    (0, typeorm_1.ManyToMany)((type) => doctor_entity_1.Doctor, (doctor) => doctor.clinics),
    (0, typeorm_1.JoinTable)({
        name: 'doctor_clinic',
        joinColumn: { name: 'clinic_id' },
        inverseJoinColumn: { name: 'doctor_id' },
    }),
    __metadata("design:type", Array)
], Clinic.prototype, "doctors", void 0);
exports.Clinic = Clinic = __decorate([
    (0, typeorm_1.Entity)('clinics')
], Clinic);
//# sourceMappingURL=clinic.entity.js.map