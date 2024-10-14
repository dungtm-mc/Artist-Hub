import { Injectable } from '@nestjs/common'
import { DataSource } from 'typeorm'

@Injectable()
export class SegmentService {
  constructor(private connection: DataSource) {}
  async create(
    name: string,
    country: string,
    repeatedCustomer: boolean,
    newCustomer: boolean
  ) {
    const segment = this.connection.getRepository('SegmentEntity').create({
      name,
      country,
      repeatedCustomer,
      newCustomer
    })
    await this.connection.getRepository('SegmentEntity').save(segment)
    return segment
  }

  async findAll() {
    return await this.connection.getRepository('SegmentEntity').find()
  }
}
