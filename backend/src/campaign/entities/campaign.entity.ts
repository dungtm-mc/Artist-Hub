import { Column, Entity, ManyToOne, OneToMany } from 'typeorm'
import { AbstractEntity } from '../../common/abstract.entity'
import { ArtistEntity } from '../../artist/entities/artist.entity'
import { FanEntity } from '../../fan/entities/fan.entity'

@Entity()
export class CampaignEntity extends AbstractEntity {
  @Column()
  name: string

  @ManyToOne(() => ArtistEntity)
  artist: ArtistEntity

  @OneToMany(() => FanEntity, (fanEntity) => fanEntity.campaign)
  fans: FanEntity[]
}
