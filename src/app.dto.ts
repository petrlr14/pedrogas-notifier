import { IsNotEmpty, IsString } from 'class-validator';

export class EmailDTO {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  comment: string;
}
