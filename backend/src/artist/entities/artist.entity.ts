import { LabelEntity } from '../../label/entities/label.entity'
import { AbstractEntity } from '../../common/abstract.entity'
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm'
import { UserEntity } from '../../user/entities/user.entity'
import { CampaignEntity } from '../../campaign/entities/campaign.entity'
import { ProductEntity } from '../../product/entities/product.entity'

@Entity()
export class ArtistEntity extends AbstractEntity {
  @Column()
  email: string

  @Column()
  password: string

  @Column()
  name: string

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
}
