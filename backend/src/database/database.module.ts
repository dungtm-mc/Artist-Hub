import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

import 'dotenv/config'
import { User } from "../user/entity/user.entity";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: () => ({
        type: process.env.DB_TYPE as 'postgres' | 'mysql' | 'sqlite' | 'mariadb' | 'mongodb' | 'oracle' | 'mssql',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.NODE_ENV === process.env.DB_TEST ? process.env.DB_TEST : process.env.DB_NAME,
        autoLoadEntities: true,
        entities: [User]
      })
    })
  ]
})

export class DatabaseModule {} 