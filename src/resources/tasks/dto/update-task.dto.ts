import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEnum, IsOptional } from 'class-validator';
import { TaskStatus } from '../types';

export class UpdateTaskDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  title?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ enum: TaskStatus, default: TaskStatus.Pending })
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
