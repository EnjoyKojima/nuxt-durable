# Nuxt Durable

## Motivation

Nice Nitro Preset:
https://github.com/nitrojs/nitro/blob/v2/src/presets/cloudflare/runtime/cloudflare-durable.ts

### Points

- `cloudflare-durable`のDurable Objectの仕様に沿って設定する。
- `durable_objects.bindings.script_name`は、`wrangler dev`を実行する際にないとエラーになる。

## Dev

```bash
pnpm run dev
```

## Deploy

```bash
pnpm run deploy
```
