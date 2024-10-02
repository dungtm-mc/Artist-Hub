import { Controller, Post } from '@nestjs/common'
import { CreateLabelDto } from './dto/createLabel.dto'
import { LabelService } from './label.service'

@Controller('label')
export class LabelController {
  constructor(private labelService: LabelService) {}
  @Post()
  async create(createLabelDto: CreateLabelDto) {
    const { name } = createLabelDto
    return this.labelService.create(name)
  }
}
