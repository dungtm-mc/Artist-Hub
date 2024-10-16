import { Controller, Get } from '@nestjs/common'
import { ArtistPageService } from './artistPage.service'

@Controller('artistPage')
export class ArtistPageController {
  constructor(private artistPageService: ArtistPageService) {}
  @Get('left')
  async getLeft() {
    return this.artistPageService.getLeftColumn()
  }

  @Get('right')
  async getRight() {
    return this.artistPageService.getRightColumn()
  }

  @Get('center')
  async getCenter() {
    return this.artistPageService.getCenter()
  }
}
