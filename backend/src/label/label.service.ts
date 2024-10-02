import { Injectable } from '@nestjs/common'
import { DataSource } from 'typeorm'
import { CreateLabelDto } from './dto/createLabel.dto'

@Injectable()
export class LabelService {
  constructor(private connection: DataSource) {}

  async create(name: string, description: string) {
    const label = await this.connection
      .getRepository('LabelEntity')
      .findOneBy({ name })
    if (label) {
      throw new Error('This name already exists')
    }
    const newLabel = this.connection
      .getRepository('LabelEntity')
      .create({ name, description })
    await this.connection.getRepository('LabelEntity').save(newLabel)
    return newLabel
  }

  async addManager(id: number, managerId: number) {
    const label = await this.connection.getRepository('LabelEntity').findOne({
      where: { id: id },
      relations: ['manager']
    })
    if (!label) {
      throw new Error('This label does not exist!')
    }
    const manager = await this.connection
      .getRepository('UserEntity')
      .findOneBy({ id: managerId })
    if (!manager) {
      throw new Error('This manager does not exist!')
    }
    label.manager = manager
    await this.connection.getRepository('LabelEntity').save(label)
    return label
  }

  async addArtist(id: number, artistId: number) {
    const label = await this.connection.getRepository('LabelEntity').findOne({
      where: { id: id },
      relations: ['artists']
    })
    if (!label) {
      throw new Error('This label does not exist!')
    }
    const artist = await this.connection
      .getRepository('ArtistEntity')
      .findOneBy({ id: artistId })
    if (!artist) {
      throw new Error('This artist does not exist!')
    }
    artist.label = label
    await this.connection.getRepository('ArtistEntity').save(artist)
    return artist
  }
}
