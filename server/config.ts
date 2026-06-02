import { config as loadDotenv } from 'dotenv';

loadDotenv();

export type RuntimeEnv = 'development' | 'production';

export interface AppConfig {
  env: RuntimeEnv;
  pingDelayMs: number;
  version: string;
}

export const DEFAULT_ENV: RuntimeEnv = 'development';
export const DEFAULT_VERSION = '0.0.0';

function parseEnv(value: string | undefined): RuntimeEnv {
  if (value === 'production') {
    return 'production';
  }

  return DEFAULT_ENV;
}

function parsePositiveInt(value: string | undefined): number {
  const parsed = Number(value);

  if (!Number.isFinite(parsed) || parsed < 0) {
    return 0;
  }

  return Math.floor(parsed);
}

export const config: AppConfig = {
  env: parseEnv(process.env.ENV ?? process.env.NODE_ENV),
  pingDelayMs: parsePositiveInt(process.env.PING_DELAY_MS),
  version: process.env.VERSION ?? DEFAULT_VERSION,
};
