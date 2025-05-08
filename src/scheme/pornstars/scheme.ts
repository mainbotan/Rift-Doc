
import { z } from 'zod';

export const PornstarScheme = z.object({
  id_name: z.string(),
  full_name: z.string(),
  avatar: z.string().url(),
  header: z.string().url(),
  link: z.object({
    site: z.string().url().optional(),
    twitter: z.string().url().optional(),
    instagram: z.string().url().optional(),
  }),
  rank: z.object({
    current: z.number(),
    weekly: z.number(),
    monthly: z.number(),
    last_month: z.number(),
    yearly: z.number(),
  }),
  views: z.object({
    videos: z.number(),
    profile: z.number(),
  }),
  property: z.object({
    relationship_status: z.string(),
    interested_in: z.string(),
    gender: z.string(),
    birth_place: z.string(),
    height_cm: z.string(),
    tatoos: z.string(),
    piercings: z.string(),
  }),
  videos_watched: z.number(),
  subscribers: z.number(),
});

export type Pornstar = z.infer<typeof PornstarScheme>;
