/// <reference types="@cloudflare/workers-types/2023-07-01" />

import { $DurableObject } from 'nitropack/presets/cloudflare/runtime/cloudflare-durable'
// import { DurableObject, DurableObjectNamespace } from "cloudflare:workers";

interface Env {
  $DurableObject: DurableObjectNamespace<$DurableObject>
  ASSETS: Fetcher
}

declare module "h3" {
  interface H3EventContext {
    cf: CfProperties;
    cloudflare: {
      request: Request;
      env: Env;
      context: ExecutionContext;
    };
  }
}

export {};
