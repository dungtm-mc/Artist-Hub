import { Controller, Post, UseGuards } from '@nestjs/common'
import { CreateArtistDto } from './dto/create-artist.dto'
import { ArtistService } from './artist.service'
import { AuthGuard } from '../auth/auth.guard'
import { RoleGuard } from '../role/role.guard'
import { Roles } from '../role/role.decorator'
import { Role } from '../enums'

@Controller('artist')
export class ArtistController {
  constructor(private artistService: ArtistService) {}

  @Post()
  @UseGuards(AuthGuard, RoleGuard)
  @Roles(Role.ADMIN)
  async create(createArtistDto: CreateArtistDto) {
    const { name, bio } = createArtistDto
    return this.artistService.create(name, bio)
  }
}
