import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { catchError, lastValueFrom, map } from 'rxjs';
import { generatorResponse, getJokeResponse } from './dto/joke-generator.dto';


@Injectable()
export class JokeGeneratorService {
    constructor(private readonly httpService: HttpService){}
    async Generator():Promise<generatorResponse>{
        try{
            let jokeGenarator = await this.getJoke()

            return {
                value: jokeGenarator.value
            }
        }catch(error){
            Logger.error('Error Internal Generator',{
                step: "Generator",
                integration: false,
                function: "Generator",
                method: null,
                path:  null,
                payload: null,
                type: "service",
                error: true,
                errorMessage: error
              });

              throw new InternalServerErrorException('Erro process internal');
        }
    }

    async getJoke():Promise<getJokeResponse>{
        try{
            let data =  this.httpService
            .get(process.env.GENERATOR) 
            .pipe(
                map((res) => { 
                return res.data
            }),
            )
            .pipe(
                catchError((err) => {
            
                   throw new InternalServerErrorException('Something went wrong with the api Joke Norris');
                }),
              );

            return await lastValueFrom(data)

        }catch(error){
            Logger.error('Request Error',{
                step: "getJoke",
                integration: true,
                function: "getJoke",
                method: "GET",
                path:  `${process.env.GENERATOR}`,
                payload: null,
                type: "service",
                error: true,
                errorMessage: error
              });
        }
    }
}
