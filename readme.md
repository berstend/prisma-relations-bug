# prisma-relations-bug

A repo detailing a bug with querying multiple pgRelations through Prisma.

This repo uses `prisma@1.14`, but I've confirmed the issue with `1.13` as well as current `beta`/`alpha`.

### Flow

- `docker-compose up`
- `yarn`
- `yarn run dbseed`
- `npm i -g prisma@1.14`
- `./introspect-and-deploy.sh` (automates prisma cli input for convenience)

### Inspection

Point your favorite graphql client to `http://localhost:4466`.

##### This will work:

```
query {
  titles {
    id

    rating {
      isPopular
    }

  }
}
```

##### Adding another many-to-one relation will break things:

```
query {
  titles {
    id

    rating {
      isPopular
    }

    meta {
      releaseYear
    }
  }
}
```
