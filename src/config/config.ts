import { load } from "dotenv-extended";
import { z } from "zod";

const env = load({
  path: "./config/.env",
  defaults: "./config/.env.defaults",
  schema: "./config/.env.schema",
  includeProcessEnv: true,
  silent: false,
  errorOnMissing: true,
  errorOnExtra: false,
});

export const configSchema = z.object({
  SUI_PRIVATE_KEY: z.string(),
});

export type Config = z.infer<typeof configSchema>;

export const config = configSchema.parse(env);
