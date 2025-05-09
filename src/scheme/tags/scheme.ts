
import { z } from 'zod';

export const TagScheme = z.object({
  name: z.string()
});

export type Video = z.infer<typeof TagScheme>;
