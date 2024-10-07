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
}
