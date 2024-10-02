import { ArtistEntity } from '../../artist/entities/artist.entity'
import { AbstractEntity } from '../../common/abstract.entity'
import { UserEntity } from '../../user/entities/user.entity'
import { Column, Entity, OneToMany } from 'typeorm'

@Entity()
export class LabelEntity extends AbstractEntity {
  @Column()
  name: string

  @OneToMany(() => UserEntity, (userEntity) => userEntity.label)
  users: UserEntity[]

  @OneToMany(() => ArtistEntity, (artistEntity) => artistEntity.label)
  artists: ArtistEntity[]
}
