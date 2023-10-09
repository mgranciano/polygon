import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';


import { AuthService } from './auth.service';
import { LoginResponse, LoginResponseDto } from 'src/models/login-response.entity';
import { UnauthorizedException, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './guards';

import { Auth, User } from '../commons/decorators';
import { User as UserEntity } from '../models';


@Resolver()
export class AuthResolver {

    constructor(private authService: AuthService){}

    @Mutation(() => LoginResponse, { name: 'login' })
    async login( @Args({name:'input', type: ()=> LoginResponseDto} ) input ) 
    {

        const { email, password } = input;

        const user = await this.authService.validateUser(email,password);
        if (!user)
           return{ message:'Login user or password does not match.'}
        const token = await this.authService.login(user);

        return {
            message: 'access granted',
            data: token.user,
            accessToken:token.accessToken,
        };
    }
}
