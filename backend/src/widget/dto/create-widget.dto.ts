import { IsEnum, IsString } from 'class-validator'
import { WidgetType } from '../../enums'

export class CreateWidgetDto {
  @IsString()
  name: string

  @IsEnum(WidgetType)
  type: string

  artistId: number
}
