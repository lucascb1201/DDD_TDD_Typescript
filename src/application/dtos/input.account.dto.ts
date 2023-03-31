import { IsString, Length } from "class-validator";

export class InputAccountDto {
  @IsString()
  @Length(14)
  document: string;

  @IsString()
  @Length(1)
  name: string;
}
