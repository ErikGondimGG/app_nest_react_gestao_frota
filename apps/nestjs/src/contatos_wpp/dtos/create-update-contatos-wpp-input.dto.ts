import { Transform } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class CreateUpdateContatosWppInputDto {
  @IsNumber()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return parseInt(value, 10);
    }

    return value;
  })
  usuarios_id?: number;

  @IsString()
  name: string;

  @IsString()
  phone: string;
}
