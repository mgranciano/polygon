import {
    IsString,
    IsEmail,
    MinLength,
    MaxLength,
    IsOptional,
    IsArray,
    IsEnum,
  } from 'class-validator';
import { EnumToString } from '../../../commons/helpers/enumToString';
import { AppRoles } from '../../../commons/constants';
  
  export class CreateUserDto {
    @IsString()
    @MaxLength(255)
    name: string;
  
    @IsOptional()
    @IsString()
    @MaxLength(255)
    lastName: string;
  
    @IsEmail()
    email: string;
  
    @IsString()
    @MinLength(8)
    @MaxLength(128)
    password: string;
  
    @IsArray()
    @IsEnum(AppRoles, {
      each: true,
      message: `must be a valid role value, ${EnumToString(AppRoles)}`,
    })
    roles: string[];
  }
