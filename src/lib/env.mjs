import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(['development', 'test', 'production']),
    isCI: z.boolean(),
    isDevelopemnt: z.boolean(),
    isProduction: z.boolean(),
    isTest: z.boolean(),
    isDebug: z.boolean(),
    isClient: z.boolean(),
    isServer: z.boolean(),
  },

  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string(),
  },

  runtimeEnv: {
    // Server
    NODE_ENV: process.env.NODE_ENV,
    isCI: process.env.CI === 'true',
    isDevelopemnt: process.env.NODE_ENV === 'development',
    isProduction: process.env.NODE_ENV === 'production',
    isTest: process.env.NODE_ENV === 'test',
    isDebug: process.env.DEBUG === 'true',
    isClient: typeof window !== 'undefined',
    isServer: typeof window === 'undefined',

    // Client
  },

  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
