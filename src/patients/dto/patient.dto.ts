import { ApiProperty } from '@nestjs/swagger';

export class CreatePatientDto {
  @ApiProperty({ example: 'Иванов Иван Иванович', description: 'ФИО' })
  fullname: string;

  @ApiProperty({ example: 203, description: 'Номер палаты' })
  room: number;

  @ApiProperty({ example: [2394], description: 'Идентификаторы врачей, закреплённых за пациентом' })
  doctors: number[];
}
