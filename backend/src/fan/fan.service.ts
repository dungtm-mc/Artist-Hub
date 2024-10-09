import { Injectable } from '@nestjs/common'
import { DataSource } from 'typeorm'

@Injectable()
export class FanService {
  constructor(private connection: DataSource) {}
  async getDataOverYear() {
    const result = await this.connection
      .getRepository('FanEntity')
      .createQueryBuilder('fan')
      .select("DATE_TRUNC('year', fan.createdAt) AS year")
      .addSelect('COUNT(fan.id) AS fanCount')
      .groupBy('year')
      .orderBy('year', 'ASC')
      .getRawMany()
    return result.map((row) => ({
      year: row.year.getFullYear(),
      fanCount: Number(row.fanCount)
    }))
  }
}
