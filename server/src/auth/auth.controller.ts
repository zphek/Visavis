/* eslint-disable prettier/prettier */
import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    @Post("/signin")
    async signIN(){
        return "HOLAAA";
    }

    @Post("/signup")
    async signUp(){
        return "";
    }

    @Post("/signOut")
    async signOut(){
        return "";
    }
}
