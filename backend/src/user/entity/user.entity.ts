import { Role } from "src/role/role.enum";
import { AbstractEntity } from "../../common/entities/abstract.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class User extends AbstractEntity {
  @Column()
  email: string

  @Column()
  password: string

  @Column()
  name: string

  @Column()
  avatar: string

  @Column({type: 'enum', enum: Role})
  role: string
}