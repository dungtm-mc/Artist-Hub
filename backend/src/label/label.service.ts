import { Injectable } from '@nestjs/common'
import { DataSource } from 'typeorm'
import { CreateLabelDto } from './dto/createLabel.dto'

@Injectable()
export class LabelService {
  constructor(private connection: DataSource) {}

  async create(name: string) {
    const label = await this.connection
      .getRepository('LabelEntity')
      .findOneBy({ name })
    if (label) {
      throw new Error('This name already exists')
    }
    const newLabel = this.connection
      .getRepository('LabelEntity')
      .create({ name })
    await this.connection.getRepository('LabelEntity').save(newLabel)
    return newLabel
  }

  async addManager(
    id: number,
    email: string,
    password: string,
    name: string,
    role: string
  ) {
    const label = await this.connection.getRepository('LabelEntity').findOne({
      where: { id: id },
      relations: ['manager']
    })
    if (!label) {
      throw new Error('This label does not exist!')
    }
    const user = this.connection
      .getRepository('UserEntity')
      .findOneBy({ email })
    if (user) {
      throw new Error('This email already exists')
    }
    const manager = this.connection.getRepository('UserEntity').create({
      email,
      password,
      name,
      role
    })
    await this.connection.getRepository('UserEntity').save(manager)
    label.manager = manager
    await this.connection.getRepository('LabelEntity').save(label)
    return label
  }
}
