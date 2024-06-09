FROM node:18-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json  ./
RUN npm ci

FROM deps AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

FROM base AS runner 
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 node.js
RUN adduser --system --uid 1001 1001 next.js

COPY --from=builder /app/public ./public
COPY --from=builder --chown=next.js:node.js /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER next.js

EXPOSE 3000

ENV PORT 3000

# Generate Prisma client
RUN npx prisma generate

CMD {"npm", "start"}