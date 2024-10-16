import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SegmentEntity } from './entities/segment.entity'
import { SegmentController } from './segment.controller'
import { SegmentService } from './segment.service'

@Module({
  imports: [TypeOrmModule.forFeature([SegmentEntity])],
  controllers: [SegmentController],
  providers: [SegmentService]
})
export class SegmentModule {}
