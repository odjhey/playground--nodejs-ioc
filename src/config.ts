import 'dotenv/config'
import { z } from 'zod'

const ConfigSchema = z.object({
  projectName: z.string(),
})

export const CONFIG = ConfigSchema.parse({
  projectName: process.env.PROJECT_NAME,
})
