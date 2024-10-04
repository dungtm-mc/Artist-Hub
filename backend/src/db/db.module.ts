import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'

import 'dotenv/config'
import { ArtistEntity } from '../artist/entities/artist.entity'
import { CampaignEntity } from '../campaign/entities/campaign.entity'
import { FanEntity } from '../fan/entities/fan.entity'
import { LabelEntity } from '../label/entities/label.entity'
import { UserEntity } from '../user/entities/user.entity'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: () => ({
        type: process.env.DB_TYPE as
          | 'postgres'
          | 'mysql'
          | 'sqlite'
          | 'mongodb',
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        port: parseInt(process.env.DB_PORT),
        autoLoadEntities: true,
        entities: [
          UserEntity,
          LabelEntity,
          ArtistEntity,
          FanEntity,
          CampaignEntity
        ]
      })
    })
  ]
})
export class DBModule {}
