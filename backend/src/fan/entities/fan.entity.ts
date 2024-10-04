import { AbstractEntity } from '../../common/abstract.entity'
import { CampaignEntity } from '../../campaign/entities/campaign.entity'
import { ChannelType, FanType } from '../../enums'
import { Column, Entity, ManyToOne } from 'typeorm'

@Entity()
export class FanEntity extends AbstractEntity {
  @Column()
  name: string

  @Column({ type: 'enum', enum: ChannelType })
  channel: string

  @Column({ type: 'enum', enum: FanType })
  type: string

  @Column()
  location: string

  @ManyToOne(() => CampaignEntity)
  campaign: CampaignEntity
}
