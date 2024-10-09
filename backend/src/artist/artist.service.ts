import { Injectable } from '@nestjs/common'
import { LabelEntity } from '../label/entities/label.entity'
import { DataSource } from 'typeorm'

@Injectable()
export class ArtistService {
  constructor(private connection: DataSource) {}

  async create(name: string, bio: string) {
    const artist = await this.connection
      .getRepository('ArtistEntity')
      .findOneBy({ name })
    if (artist) {
      throw new Error('This email has already been registered')
    }
    const newArtist = this.connection
      .getRepository('ArtistEntity')
      .create({ name, bio })
    await this.connection.getRepository('ArtistEntity').save(newArtist)
    return newArtist
  }

  async assign(id: number, managerId: number) {
    const artist = await this.connection
      .getRepository('ArtistEntity')
      .findOneBy({ id })
    if (!artist) {
      throw new Error('This artist does not exist!')
    }
    const manager = await this.connection
      .getRepository('UserEntity')
      .findOneBy({ id: managerId })
    if (!manager) {
      throw new Error('This manager does not exist!')
    }
    artist.manager = manager
    await this.connection.getRepository('ArtistEntity').save(artist)
    return artist
  }

  async getFanCountsByYearForArtists(artistId: number) {
    const result = await this.connection
      .getRepository('ArtistEntity')
      .createQueryBuilder('artist')
      .leftJoinAndSelect('artist.campaigns', 'campain')
      .leftJoinAndSelect('campain.fans', 'fan')
      .select(
        "artist.id AS artistId, artist.name AS artistName, DATE_TRUNC('year', fan.createdAt) AS year"
      )
      .addSelect('COUNT(fan.id) AS fanCount')
      .where('artist.id = :artistId', { artistId })
      .groupBy('artist.id, year')
      .orderBy('year', 'ASC')
      .addOrderBy('year', 'ASC')
      .getRawMany()
    return result.map((row) => ({
      artistId: row.artistId,
      artistName: row.artistName,
      year: row.year.getFullYear(),
      fanCount: Number(row.fanCount)
    }))
  }

  async getFanCountsByMonthForArtists(artistId: number) {
    const result = await this.connection
      .getRepository('ArtistEntity')
      .createQueryBuilder('artist')
      .leftJoinAndSelect('artist.campaigns', 'campain')
      .leftJoinAndSelect('campain.fans', 'fan')
      .select('artist.id AS artistId, artist.name AS artistName')
      .addSelect("TO_CHAR(fan.createdAt, 'YYYY-MM') AS month")
      .addSelect('COUNT(fan.id) AS fanCount')
      .where('artist.id = :artistId', { artistId })
      .groupBy('artist.id, month')
      .orderBy('month', 'ASC')
      .getRawMany()
    return result.map((row) => ({
      artistId: row.artistId,
      artistName: row.artistName,
      year: row.year.getFullYear(),
      fanCount: Number(row.fanCount)
    }))
  }

  async getFanCountsByChannelsForArtists(artistId: number) {
    const result = await this.connection
      .getRepository('ArtistEntity')
      .createQueryBuilder('artist')
      .leftJoinAndSelect('artist.campaigns', 'campain')
      .leftJoinAndSelect('campain.fans', 'fan')
      .select(
        'artist.id as artistId, artist.name as artistName, fan.channel AS channel'
      )
      .addSelect('COUNT (fan.id) AS fanCount')
      .where('artist.id = :artistId', { artistId })
      .groupBy('artist.id, fan.channel')
      .orderBy('fan.channel', 'ASC')
      .getRawMany()

    return result.map((row) => ({
      artistId: row.artistId,
      artistName: row.artistName,
      channel: row.channel,
      fanCount: Number(row.fanCount)
    }))
  }
}
