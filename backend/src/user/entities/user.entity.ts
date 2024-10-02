import { Role } from '../../role/role.enum'
import { AbstractEntity } from '../../common/abstract.entity'
import { Column, Entity, ManyToOne } from 'typeorm'
import { LabelEntity } from '../../label/entities/label.entity'

@Entity()
export class UserEntity extends AbstractEntity {
  @Column()
  email: string

  @Column()
  password: string

  @Column()
  name: string

  @Column({ type: 'enum', enum: Role })
  role: string

  @ManyToOne(() => LabelEntity)
  label: LabelEntity
}
