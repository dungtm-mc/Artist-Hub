import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { WidgetEntity } from './entities/widget.entity'
import { WidgetController } from './widget.controller'
import { WidgetService } from './widget.service'
import { ArtistService } from '../artist/artist.service'

@Module({
  imports: [TypeOrmModule.forFeature([WidgetEntity])],
  controllers: [WidgetController],
  providers: [WidgetService, ArtistService]
})
export class WidgetModule {}
