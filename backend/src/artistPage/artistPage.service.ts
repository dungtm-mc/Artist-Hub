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
        key: 'total_fans'
      },
      {
        key: 'new_fans'
      },
      {
        key: 'campaign_opportunities'
      },
      {
        key: 'fan_database'
      },
      {
        key: 'fan_customers'
      },
      {
        key: 'segment_by_total'
      },
      {
        key: 'segment_by_revenue'
      },
      {
        key: 'fan_growth_over_year'
      },
      {
        key: 'fan_growth_over_month'
      },
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
