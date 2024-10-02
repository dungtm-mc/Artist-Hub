import { ArtistEntity } from '../../artist/entities/artist.entity'
import { AbstractEntity } from '../../common/abstract.entity'
import { UserEntity } from '../../user/entities/user.entity'
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm'

@Entity()
export class LabelEntity extends AbstractEntity {
  @Column()
  name: string

  @Column()
  dewcription: string

  @OneToMany(() => UserEntity, (userEntity) => userEntity.label)
  users: UserEntity[]

  @OneToMany(() => ArtistEntity, (artistEntity) => artistEntity.label)
  artists: ArtistEntity[]

  @ManyToOne(() => UserEntity, { nullable: true })
  manager?: UserEntity
}
