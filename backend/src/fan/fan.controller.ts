import { Controller, Get } from '@nestjs/common'
import { FanService } from './fan.service'

@Controller('fan')
export class FanController {
  constructor(private fanService: FanService) {}
  @Get('year')
  async getDataOverYear() {
    return this.fanService.getDataOverYear()
  }
}
