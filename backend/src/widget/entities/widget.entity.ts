import { WidgetType } from '../../enums'
import { ArtistPageEntity } from '../../artistPage/entities/artistPage.entity'
import { AbstractEntity } from '../../common/abstract.entity'
import { Column, Entity, ManyToOne } from 'typeorm'

@Entity()
export class WidgetEntity extends AbstractEntity {
  @Column()
  name: string

  @Column({ type: 'enum', enum: WidgetType })
  type: string

  @ManyToOne(() => ArtistPageEntity)
  artistPage: ArtistPageEntity

  @Column({ type: 'varchar', length: 100, nullable: true })
  datasource?: string
}
