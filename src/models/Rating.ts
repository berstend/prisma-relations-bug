import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from 'typeorm'

import Title from './Title'

@Entity()
export default class Rating extends BaseEntity {
  @PrimaryColumn()
  id: number

  @Column()
  isPopular: boolean

  @OneToMany(_ => Title, title => title.rating)
  titles: Title[]
}
