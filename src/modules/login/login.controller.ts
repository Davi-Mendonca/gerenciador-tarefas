import { Controller, Post, Body } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {

    constructor(private service: LoginService){}
    
    @Post()
    realizarLogin(@Body('email') email: string, @Body('senha') senha: string) {
        return this.service.login(email, senha);
    }
}
