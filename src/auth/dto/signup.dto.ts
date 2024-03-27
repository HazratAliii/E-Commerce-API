import { IsEmail, IsEmpty, MinLength, minLength } from 'class-validator';

export class SignupDto {
  @IsEmail()
  @IsEmpty()
  email: string;

  @IsEmpty()
  @MinLength(6)
  password: string;
}
