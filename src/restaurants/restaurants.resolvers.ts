
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateRestaurantDto } from "./dtos/create-restaurant.dto";

import { Restaurant } from "./entities/restaurant.entity";


@Resolver(of => Restaurant)
export class RestaurantResolver {
    @Query(returns => [Restaurant]) //리턴 restaurant array
    restaurants(@Args('veganOnly') veganOnly: boolean): Restaurant[] { //veganOnly라는 argument 호출
        console.log(veganOnly)
        return [];   
    }

    @Mutation(returns => Boolean)
    createRestaurant( //arguments 만들기
        @Args() CreateRestaurantDto: CreateRestaurantDto
    ): boolean{
        console.log(CreateRestaurantDto)
        return true;
    }
}
