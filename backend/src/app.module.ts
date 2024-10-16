import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ArtistModule } from './artist/artist.module'
import { DBModule } from './db/db.module'
import { CampaignModule } from './campaign/campaign.module'
import { FanModule } from './fan/fan.module'
import { LabelModule } from './label/label.module'
import { UserModule } from './user/user.module'
import { ProductModule } from './product/product.module'
import { AuthModule } from './auth/auth.module'
import { ArtistPageModule } from './artistPage/artistPage.module'
import { WidgetModule } from './widget/widget.module'
import { SegmentModule } from './segments/segment.module'

@Module({
  imports: [
    AuthModule,
    ArtistModule,
    DBModule,
    CampaignModule,
    FanModule,
    LabelModule,
    UserModule,
    ProductModule,
    ArtistPageModule,
    WidgetModule,
    SegmentModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
