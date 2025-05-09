
import { optional, z } from 'zod';

export const CategoryScheme = z.object({
  id: z.number(),
  name: z.string(),
  img: z.string().url().optional(),
  videos_count: z.number().optional()
});

export type Category = z.infer<typeof CategoryScheme>;
