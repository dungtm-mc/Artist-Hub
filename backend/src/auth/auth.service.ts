import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { DataSource } from "typeorm";
import * as bcrypt from 'bcryptjs'
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private connection : DataSource,
    private jwtService : JwtService
  ) {}
  async login (email: string, password: string) {
    const user = await this.connection.getRepository('User').findOneBy({email})
    if (!user) {
      throw new NotFoundException('Account not found!')
    }
    const isValidPassword = await bcrypt.compare(password, user.password)
    if (!isValidPassword) {
      throw new UnauthorizedException('Wrong password!')
    }
    const payloads = {id: user.id, email: user.email, role: user.role}
    return {
      'access_token': await this.jwtService.signAsync(payloads),
      'role': user.role
    }
  }
}