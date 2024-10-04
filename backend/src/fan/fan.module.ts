import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { FanEntity } from './entities/fan.entity'
import { FanController } from './fan.controller'
import { FanService } from './fan.service'

@Module({
  imports: [TypeOrmModule.forFeature([FanEntity])],
  controllers: [FanController],
  providers: [FanService]
})
export class FanModule {}
