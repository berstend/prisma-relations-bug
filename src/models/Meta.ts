import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from 'typeorm'

import Title from './Title'

@Entity()
export default class Meta extends BaseEntity {
  @PrimaryColumn()
  id: string

  @Column({ nullable: true })
  releaseYear: number // 2009

  @OneToMany(_ => Title, title => title.meta)
  titles: Title[]
}
