import { SetMetadata } from "@nestjs/common";
import { Role } from "./role.enum";
import 'dotenv/config'

export const Roles = (...role: Role[]) => SetMetadata(process.env.ROLE_KEY, role)