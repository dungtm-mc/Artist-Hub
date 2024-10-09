import { Module } from '@nestjs/common'
import { UserModule } from '../user/user.module'
import { JwtModule } from '@nestjs/jwt'
import 'dotenv/config'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '2d' }
    })
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
