import { Controller, Get, Post } from '@nestjs/common'
import { SegmentService } from './segment.service'
import { CreateSegmentDto } from './dto/create-segment.dto'

@Controller('segment')
export class SegmentController {
  constructor(private segmentService: SegmentService) {}

  @Post()
  async create(createSegmentDto: CreateSegmentDto) {
    const { name, country, repeatedCustomer, newCustomer } = createSegmentDto
    return this.segmentService.create(
      name,
      country,
      repeatedCustomer,
      newCustomer
    )
  }

  @Get()
  async findAll() {
    return this.segmentService.findAll()
  }
}
