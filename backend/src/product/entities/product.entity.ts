import { ArtistEntity } from '../../artist/entities/artist.entity'
import { AbstractEntity } from '../../common/abstract.entity'
import { Column, Entity, ManyToOne } from 'typeorm'

@Entity()
export class ProductEntity extends AbstractEntity {
  @Column()
  name: string

  @Column()
  price: number

  @Column()
  customers: number

  @Column()
  revenues: number

  @ManyToOne(() => ArtistEntity)
  artist: AbstractEntity
}
