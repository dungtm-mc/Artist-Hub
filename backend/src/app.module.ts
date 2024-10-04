import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ArtistModule } from './artist/artist.module'
import { DBModule } from './db/db.module'
import { CampaignModule } from './campaign/campaign.module'
import { FanModule } from './fan/fan.module'
import { LabelModule } from './label/label.module'
import { UserModule } from './user/user.module'

@Module({
  imports: [
    ArtistModule,
    DBModule,
    CampaignModule,
    FanModule,
    LabelModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
