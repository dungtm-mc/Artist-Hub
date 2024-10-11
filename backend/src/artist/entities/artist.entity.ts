import { LabelEntity } from '../../label/entities/label.entity'
import { AbstractEntity } from '../../common/abstract.entity'
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne
} from 'typeorm'
import { UserEntity } from '../../user/entities/user.entity'
import { CampaignEntity } from '../../campaign/entities/campaign.entity'
import { ProductEntity } from '../../product/entities/product.entity'
import { ArtistPageEntity } from '../../artistPage/entities/artistPage.entity'
import { SegmentEntity } from '../../segments/entities/segment.entity'

@Entity()
export class ArtistEntity extends AbstractEntity {
  @Column()
  name: string

  @Column()
  bio: string

  @ManyToOne(() => LabelEntity, (labelEntity) => labelEntity.artists, {
    nullable: true
  })
  label?: LabelEntity

  @ManyToOne(() => UserEntity, { nullable: true })
  manager?: UserEntity

  @OneToMany(() => CampaignEntity, (campaignEntity) => campaignEntity.artist)
  campaigns: CampaignEntity[]

  @OneToMany(() => ProductEntity, (productEntity) => productEntity.artist)
  products: ProductEntity[]

  @OneToOne(() => ArtistPageEntity)
  @JoinColumn()
  page: ArtistPageEntity

  @OneToMany(() => SegmentEntity, (segmentEntity) => segmentEntity.artist)
  segments: SegmentEntity[]
}
