import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CampaignEntity } from './entities/campaign.entity'
import { CampaignController } from './campain.controller'
import { CampainService } from './campaign.service'

@Module({
  imports: [TypeOrmModule.forFeature([CampaignEntity])],
  controllers: [CampaignController],
  providers: [CampainService]
})
export class CampaignModule {}
