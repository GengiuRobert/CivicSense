import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {

    signIn() {
        return {msg: 'signIn logic here'};
    }

    signUp() {
        return {msg: 'signUp logic here'};
    }
}