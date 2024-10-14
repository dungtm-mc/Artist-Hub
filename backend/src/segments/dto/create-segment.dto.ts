import { IsString } from 'class-validator'

export class CreateSegmentDto {
  @IsString()
  name: string

  @IsString()
  country: string

  repeatedCustomer: boolean

  newCustomer: boolean
}
