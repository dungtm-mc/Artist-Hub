import { Injectable } from '@nestjs/common'
import { DataSource } from 'typeorm'

@Injectable()
export class ArtistPageService {
  constructor(private connection: DataSource) {}
  async getLeftColumn() {
    return [
      {
        key: 0,
        title: 'CUSTOM',
        pages: [
          {
            label: 'New Page'
          }
        ]
      },
      {
        key: 1,
        title: 'ANALYZE',
        pages: [
          {
            label: 'Fans'
          },
          {
            label: 'Customers'
          },
          {
            label: 'Segments'
          }
        ]
      },
      {
        key: 2,
        title: 'ENGAGE',
        pages: [
          {
            label: 'Email'
          }
        ]
      }
    ]
  }

  async getRightColumn() {
    return {
      visible: true
    }
  }

  async getCenter() {
    return [
      {
        key: 0,
        type: 'Streaming'
      },
      {
        key: 1,
        type: 'Social'
      },
      {
        key: 2,
        type: 'Sales'
      }
    ]
  }
}
