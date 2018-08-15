#!/usr/bin/env bash
set timeout -1

echo -e "endpoint: http://localhost:4466\ndatamodel: datamodel.graphql" > prisma.yml
FORCE_COLOR=0 ./script.exp
mv -f datamodel-*.graphql datamodel.graphql
prisma deploy