import { Body, Controller, Param, Patch, Post, UseGuards } from '@nestjs/common'
import { CreateLabelDto } from './dto/createLabel.dto'
import { LabelService } from './label.service'
import { AuthGuard } from '../auth/auth.guard'
import { RoleGuard } from '../role/role.guard'
import { Roles } from '../role/role.decorator'
import { Role } from '../enums'

@Controller('label')
export class LabelController {
  constructor(private labelService: LabelService) {}

  @Post()
  @UseGuards(AuthGuard, RoleGuard)
  @Roles(Role.ADMIN)
  async create(createLabelDto: CreateLabelDto) {
    const { name, description } = createLabelDto
    return this.labelService.create(name, description)
  }

  @Patch('/manager/:id')
  @UseGuards(AuthGuard, RoleGuard)
  @Roles(Role.ADMIN, Role.LABEL_MAGAGER)
  async addManager(
    @Param('id') id: number,
    @Body('managerId') managerId: number
  ) {
    return this.labelService.addManager(id, managerId)
  }
}
