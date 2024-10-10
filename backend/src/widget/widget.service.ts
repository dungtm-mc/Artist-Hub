import { Injectable } from '@nestjs/common'
import { ArtistService } from '../artist/artist.service'
import { DataSource } from 'typeorm'

@Injectable()
export class WidgetService {
  constructor(
    private connection: DataSource,
    private artistService: ArtistService
  ) {}
  async create(name: string, type: string, artistId: number) {
    const artist = await this.connection.getRepository('ArtistEntity').findOne({
      where: { id: artistId },
      relations: ['page']
    })
    const widget = this.connection.getRepository('WidgetEntity').create({
      name,
      type,
      artistPage: artist.page
    })
    await this.connection.getRepository('WidgetEntity').save(widget)
  }
  async updateWidgetDataScouce(widgetId: number, artistId: number) {
    const fanData =
      await this.artistService.getFanCountsByYearForArtists(artistId)
    await this.connection
      .getRepository('WidgetEntity')
      .update(widgetId, { datasource: JSON.stringify(fanData) })
  }
}
