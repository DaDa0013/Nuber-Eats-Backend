import { Field, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class Restaurant{//Restaurant을 위한 object type 생성
    @Field(is => String)
    name: string;

    @Field(type => Boolean)
    isVegan: boolean;

    @Field(type => String)
    address:string;

    @Field(type => String)
    ownerName:string;
}