import { ApiProperty } from '@nestjs/swagger';

export class CreateClinicDto {
  @ApiProperty({ example: 'Ленинский проспект, дом 4', description: 'Адрес' })
  address: string;

  @ApiProperty({ example: '+7 (800) 555-35-35', description: 'Номер ' })
  phone: string;
}
