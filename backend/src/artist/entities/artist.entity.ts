import { LabelEntity } from '../../label/entities/label.entity'
import { AbstractEntity } from '../../common/abstract.entity'
import { Column, Entity, ManyToOne } from 'typeorm'
import { UserEntity } from '../../user/entities/user.entity'

@Entity()
export class ArtistEntity extends AbstractEntity {
  @Column()
  email: string

  @Column()
  password: string

  @Column()
  name: string

  @ManyToOne(() => LabelEntity, (labelEntity) => labelEntity.artists, {
    nullable: true
  })
  label?: LabelEntity

  @ManyToOne(() => UserEntity, { nullable: true })
  manager?: UserEntity
}
