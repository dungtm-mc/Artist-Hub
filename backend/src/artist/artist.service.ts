import { Injectable } from '@nestjs/common'
import { LabelEntity } from '../label/entities/label.entity'
import { DataSource } from 'typeorm'

@Injectable()
export class ArtistService {
  constructor(private connection: DataSource) {}

  async create(email: string, password: string) {
    const artist = await this.connection
      .getRepository('ArtistEntity')
      .findOneBy({ email })
    if (artist) {
      throw new Error('This email has already been registered')
    }
    const newArtist = this.connection
      .getRepository('ArtistEntity')
      .create({ email, password })
    await this.connection.getRepository('ArtistEntity').save(newArtist)
    return newArtist
  }
}
