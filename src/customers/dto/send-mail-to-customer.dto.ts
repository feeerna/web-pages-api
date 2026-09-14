import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class FormDto {
    @IsString()
    @ApiProperty({ description: 'Nombre del cliente', example: 'Juanes pizza' })
    @IsNotEmpty({ message: 'El nombre del cliente no puede estar vacío' })
    readonly form: string;
}

