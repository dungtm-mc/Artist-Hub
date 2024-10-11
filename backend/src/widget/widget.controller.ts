import { Controller, Patch, Post } from '@nestjs/common'
import { WidgetService } from './widget.service'
import { CreateWidgetDto } from './dto/create-widget.dto'

@Controller('widget')
export class WidgetController {
  constructor(private widgetService: WidgetService) {}

  @Post()
  async create(createWidgetDto: CreateWidgetDto) {
    const { name, type, artistId } = createWidgetDto
    return this.widgetService.create(name, type, artistId)
  }

  @Patch('year')
  async updateWidgetDataScouceYear(widgetId: number, artistId: number) {
    return this.widgetService.updateWidgetDataScouceYear(widgetId, artistId)
  }

  @Patch('month')
  async updateWidgetDataScouceMonth(widgetId: number, artistId: number) {
    return this.widgetService.updateWidgetDataScouceMonth(widgetId, artistId)
  }

  @Patch('channel')
  async updateWidgetDataScouceChannels(widgetId: number, artistId: number) {
    return this.widgetService.updateWidgetDataScouceChannels(widgetId, artistId)
  }
}
