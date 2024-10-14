import { AbstractEntity } from 'src/common/abstract.entity'
import { ArtistEntity } from '../../artist/entities/artist.entity'
import { Column, Entity, ManyToOne } from 'typeorm'

@Entity()
export class SegmentEntity extends AbstractEntity {
  @Column()
  name: string

  @Column()
  country: string

  @Column()
  repeatedCustomer: boolean

  @Column()
  newCustomer: boolean

  @ManyToOne(() => ArtistEntity)
  artist: ArtistEntity
}
