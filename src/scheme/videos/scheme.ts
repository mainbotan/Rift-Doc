
import { z } from 'zod';

export const VideoScheme = z.object({
  view_key: z.string(),
  title: z.string(),
  img: z.string().url().optional(),
  preview: z.string().url().optional(),
  creator: z.object({
    id_name: z.string().optional(),
    full_name: z.string().optional(),
    type: z.string().optional(),
  })
});

export type Video = z.infer<typeof VideoScheme>;
