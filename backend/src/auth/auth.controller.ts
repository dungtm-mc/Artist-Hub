import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "src/auth/auth.service";
import { LoginDto } from "./dto/login.dto";

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService : AuthService
  ) {}

  @Post('')
  async login(@Body() loginDto: LoginDto) {
    const {email, password} = loginDto
    return this.authService.login(email, password)
  }
}