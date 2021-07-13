import { ArgsType, Field, InputType } from "@nestjs/graphql";
import { IsBoolean, IsString, Length } from "class-validator";

@ArgsType() //각각을 분리된 arguments로써 정의 & 분리된 값을 GraphQL argument로 전달
export class CreateRestaurantDto {

    @Field(type => String) //Field는 Type을 필요로 함
    @IsString()
    @Length(5, 10)
    name: string;
    
    @Field(type => Boolean)
    @IsBoolean()
    isVegan: boolean;

    @Field(type => String)
    @IsString()
    address: string;

    @Field(type => String) 
    @IsString()
    @Length(5, 10) //최소 최대 길이 제한
    ownerName: string;
}