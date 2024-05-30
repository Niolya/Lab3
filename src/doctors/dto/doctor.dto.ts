import { ApiProperty } from '@nestjs/swagger';

export class CreateDoctorDto {
  @ApiProperty({ example: 'Иванов Иван Иванович', description: 'ФИО' })
  fullname: string;

  @ApiProperty({ example: 'Главврач', description: 'Должность' })
  position: string;

  @ApiProperty({ example: [1, 13, 5, 8], description: 'Идентификаторы филиалов, в которых работает врач' })
  clinics: number[];
}
