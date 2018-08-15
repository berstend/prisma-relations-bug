// Must be at top
import 'reflect-metadata'

import { createConnection } from 'typeorm'
import { typeOrmConfig } from './config'

import Title from './models/Title'
import Meta from './models/Meta'
import Rating from './models/Rating'

// go
;(async () => {
  console.log('Beginning dbseed task.')
  const connection = await createConnection(typeOrmConfig)
  console.log('PG connected.')

  const entries = [1, 2, 3, 4, 5]
  for (const i of entries) {
    const title = new Title()
    title.id = 100 + i
    title.type = 'movie'

    const meta = new Meta()
    meta.id = `foo_${i}`
    meta.releaseYear = 200 + i
    title.meta = meta

    const rating = new Rating()
    rating.id = 100 + i
    rating.isPopular = true
    title.rating = rating

    await title.save()
  }

  // Close connection
  await connection.close()
  console.log('PG connection closed.')
  console.log('Finished dbseed task.')
})()
