import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class FormDto {
    @IsString()
    @ApiProperty({ description: 'Nombre del cliente', example: 'Juanes pizza' })
    @IsNotEmpty({ message: 'El nombre del cliente no puede estar vacío' })
    readonly name: string;

    @IsOptional()
    @IsString()
    readonly first_name?: string;

    @IsOptional()
    @IsString()
    readonly second_name?: string;

    @IsOptional()
    @IsString()
    readonly last_name?: string;

    @IsOptional()
    @IsString()
    readonly second_last_name?: string;

    @IsOptional()
    @IsString()
    readonly tradename?: string;

    @IsOptional()
    @IsString()
    readonly identification_type?: string;

    @IsOptional()
    @IsString()
    readonly value?: string;
}

