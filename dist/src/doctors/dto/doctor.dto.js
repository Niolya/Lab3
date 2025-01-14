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
exports.CreateDoctorDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateDoctorDto {
}
exports.CreateDoctorDto = CreateDoctorDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Иванов Иван Иванович', description: 'ФИО' }),
    __metadata("design:type", String)
], CreateDoctorDto.prototype, "fullname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Главврач', description: 'Должность' }),
    __metadata("design:type", String)
], CreateDoctorDto.prototype, "position", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: [1, 13, 5, 8], description: 'Идентификаторы филиалов, в которых работает врач' }),
    __metadata("design:type", Array)
], CreateDoctorDto.prototype, "clinics", void 0);
//# sourceMappingURL=doctor.dto.js.map