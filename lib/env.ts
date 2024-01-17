import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
    server: {
        API_URL: z.string().url(),
        RESEND_API_KEY: z.string(),
    },
    client: {},
    experimental__runtimeEnv: {}
});