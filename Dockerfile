#syntax=docker/dockerfile:1.7-labs
# Command line arguments, such as Node version
ARG NODE_VERSION=lts

#
# --- Stage 1: Build ---
#

FROM node:${NODE_VERSION} AS build
RUN corepack enable pnpm

ARG BUILD_COMMIT
ARG BUILD_NUMBER
ARG BUILD_TIMESTAMP

WORKDIR /app
COPY package.json pnpm-*.yaml .npmrc ./
COPY --parents apps/**/package.json ./

#
# --- Stage: build-nuxt ---
#
FROM build AS build-nuxt
# Install dependencies
WORKDIR /app
COPY --from=build /app/ .
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm --filter ./apps/nuxt prepare
RUN pnpm --filter ./apps/nuxt build

#
# --- Stage: build-payload ---
#
FROM build AS build-payload
WORKDIR /app
COPY --from=build /app/ .
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm --filter ./apps/payload build

#
# --- Stage: nuxt ---
#
FROM ghcr.io/wisemen-digital/nuxt-base:${NODE_VERSION}-unsecured AS nuxt
COPY --from=build-nuxt --chown=nobody /app/apps/nuxt/.output /app/www/

#
# --- Stage: payload ---
#
FROM node:${NODE_VERSION}-alpine AS payload
ENV NODE_ENV production
WORKDIR /app

COPY --from=build-payload /app/apps/payload/.next ./
RUN mv ./static ./standalone/apps/payload/.next/static
EXPOSE 3000
WORKDIR /app/standalone/apps/payload
