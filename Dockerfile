FROM node:14 AS deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --no-cache

# Rebuild the source code only when needed
FROM node:14 AS builder
WORKDIR /app --no-cache
COPY . .
COPY --from=deps /app/node_modules  ./node_modules
RUN yarn add --dev typescript && yarn build && yarn install --production

# Production image, copy all the files and run next
FROM node:14 AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --group 1001 --system nodejs
RUN adduser --system nextjs --user 1001

# You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3000

ENV PORT 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1

CMD ["node_modules/.bin/next", "start"]
