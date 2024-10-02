import { Injectable, UnauthorizedException } from '@nestjs/common'
import { DataSource } from 'typeorm'
import * as bcrypt from 'bcryptjs'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class LoginService {
  constructor(
    private connection: DataSource,
    private jwtService: JwtService
  ) {}
  async login(
    email: string,
    password: string
  ): Promise<{ access_token: string; role: string }> {
    const user = await this.connection
      .getRepository('UserEntity')
      .findOneBy({ email })
    if (!user) {
      throw new UnauthorizedException('This email has not been registered yet!')
    }
    const isValidPass = await bcrypt.compare(password, user.password)
    if (!isValidPass) {
      throw new UnauthorizedException('Wrong password')
    }
    const payloads = { id: user.id, email: user.email, role: user.role }
    return {
      access_token: await this.jwtService.signAsync(payloads),
      role: user.role
    }
  }
}
