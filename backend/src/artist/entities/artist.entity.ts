import { LabelEntity } from '../../label/entities/label.entity'
import { AbstractEntity } from '../../common/abstract.entity'
import { Column, Entity, ManyToOne } from 'typeorm'

@Entity()
export class ArtistEntity extends AbstractEntity {
  @Column()
  email: string

  @Column()
  password: string

  @ManyToOne(() => LabelEntity, (labelEntity) => labelEntity.artists)
  label: LabelEntity
}
