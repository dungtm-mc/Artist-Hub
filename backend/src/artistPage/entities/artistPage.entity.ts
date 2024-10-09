import { WidgetEntity } from '../../widget/entities/widget.entity'
import { ArtistEntity } from '../../artist/entities/artist.entity'
import { AbstractEntity } from '../../common/abstract.entity'
import { Column, Entity, OneToMany, OneToOne } from 'typeorm'

@Entity()
export class ArtistPageEntity extends AbstractEntity {
  @Column()
  hasAIAssistant: boolean

  @Column()
  editMode: boolean

  @OneToOne(() => ArtistEntity)
  artist: ArtistEntity

  @OneToMany(() => WidgetEntity, (widgetEntity) => widgetEntity.artistPage)
  widgets: WidgetEntity[]
}
