import { Role } from '../../role/role.enum'
import { AbstractEntity } from '../../common/abstract.entity'
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm'
import { LabelEntity } from '../../label/entities/label.entity'
import { ArtistEntity } from 'src/artist/entities/artist.entity'

@Entity()
export class UserEntity extends AbstractEntity {
  @Column()
  email: string

  @Column()
  password: string

  @Column()
  name: string

  @Column({ type: 'enum', enum: Role })
  role: string

  @ManyToOne(() => LabelEntity, { nullable: true })
  label?: LabelEntity

  @OneToMany(() => LabelEntity, (labelEntity) => labelEntity.manager)
  labelMangaged: LabelEntity[]

  @OneToMany(() => ArtistEntity, (artistEntity) => artistEntity.manager)
  artistManaged: ArtistEntity[]
}
