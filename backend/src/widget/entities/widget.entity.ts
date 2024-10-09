import { ArtistPageEntity } from '../../artistPage/entities/artistPage.entity'
import { AbstractEntity } from '../../common/abstract.entity'
import { Column, Entity, ManyToOne } from 'typeorm'

@Entity()
export class WidgetEntity extends AbstractEntity {
  @Column()
  name: string

  @ManyToOne(() => ArtistPageEntity)
  artistPage: ArtistPageEntity
}
