import { Module } from '@nestjs/common'
import { ArtistPageEntity } from './entities/artistPage.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ArtistPageService } from './artistPage.service'
import { ArtistPageController } from './artistPage.controller'

@Module({
  imports: [TypeOrmModule.forFeature([ArtistPageEntity])],
  controllers: [ArtistPageController],
  providers: [ArtistPageService]
})
export class ArtistPageModule {}
