import { ArtistEntity } from '../../artist/entities/artist.entity'
import { Column, Entity, ManyToOne } from 'typeorm'

@Entity()
export class SegmentEntity {
  @Column()
  name: string

  @Column()
  country: string

  @Column()
  repeatedCustomer: boolean

  @ManyToOne(() => ArtistEntity)
  artist: ArtistEntity
}
