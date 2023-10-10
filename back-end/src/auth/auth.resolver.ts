import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { AuthService } from './auth.service';
import { LoginResponse, LoginRequest } from '../models';
import { LOGIN_FAILED, LOGIN_OK } from '../commons/constants';

@Resolver()
export class AuthResolver {

    constructor(private authService: AuthService) { }

    @Mutation(() => LoginResponse, { name: 'login' })
    async login(@Args({ name: 'input', type: () => LoginRequest }) input) {

        const { email, password } = input;

        const user = await this.authService.validateUser(email, password);
        if (!user)
            return { message: LOGIN_FAILED }
        const token = await this.authService.login(user);

        return {
            message: LOGIN_OK,
            data: token.user,
            accessToken: token.accessToken,
        };
    }
}
