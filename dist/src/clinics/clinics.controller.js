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
exports.ClinicsController = void 0;
const clinics_service_1 = require("./clinics.service");
const common_1 = require("@nestjs/common");
const clinic_entity_1 = require("./clinic.entity");
const swagger_1 = require("@nestjs/swagger");
const clinic_dto_1 = require("./dto/clinic.dto");
let ClinicsController = class ClinicsController {
    constructor(clinicsService) {
        this.clinicsService = clinicsService;
    }
    findAll() {
        return this.clinicsService.findAll();
    }
    findIncomplete() {
        return this.clinicsService.findIncomplete();
    }
    findOne(id) {
        return this.clinicsService.findOne(+id);
    }
    update(id, updateClinic) {
        return this.clinicsService.update(+id, updateClinic);
    }
    create(clinic) {
        return this.clinicsService.create(clinic);
    }
    remove(id) {
        return this.clinicsService.remove(+id);
    }
};
exports.ClinicsController = ClinicsController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение информации о всех филиалах' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClinicsController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение неполной информации о всех филиалах' }),
    (0, common_1.Get)('incomplete'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClinicsController.prototype, "findIncomplete", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение информации о конкретном филиале' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClinicsController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Обновление информации о филиале' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, clinic_entity_1.Clinic]),
    __metadata("design:returntype", void 0)
], ClinicsController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Добавление филиала' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [clinic_dto_1.CreateClinicDto]),
    __metadata("design:returntype", void 0)
], ClinicsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Удаление филиала' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClinicsController.prototype, "remove", null);
exports.ClinicsController = ClinicsController = __decorate([
    (0, common_1.Controller)('clinics'),
    (0, swagger_1.ApiTags)('Филиалы'),
    __metadata("design:paramtypes", [clinics_service_1.ClinicsService])
], ClinicsController);
//# sourceMappingURL=clinics.controller.js.map