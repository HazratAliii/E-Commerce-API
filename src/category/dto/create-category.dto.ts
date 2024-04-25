import { IsOptional, IsString } from "class-validator";

export class CreateCategoryDto {
    @IsOptional()
    parent_id: string
    @IsString()
    name: string
}
