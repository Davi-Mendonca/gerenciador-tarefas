import { Controller, Get } from '@nestjs/common';

@Controller('login')
export class LoginController {
    
    @Get()
    helloWorld(): string {
        return "Hellor World!"
    }
}
