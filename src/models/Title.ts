import { Column, Entity, ManyToOne, PrimaryColumn, BaseEntity } from 'typeorm'

import Meta from './Meta'
import Rating from './Rating'

@Entity()
export default class Title extends BaseEntity {
  @PrimaryColumn()
  id: number

  @Column()
  type: string

  @ManyToOne(_ => Meta, meta => meta.titles, { cascade: true })
  meta: Meta

  @ManyToOne(_ => Rating, rating => rating.titles, { cascade: true })
  rating: Rating
}
