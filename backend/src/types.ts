export interface BackendConfig {
  LICENCE_KEY: string;
  SELF_HOSTED: boolean;
  SELF_HOSTED_ADMIN: string;
  DB_NAME: string;
  DB_USER: string;
  DB_PASSWORD: string;
  DB_HOST: string;
  DB_PORT: number;
  SESSION_SECRET: string;
  REDIS_ENABLED: boolean;
  REDIS_FOR_SOCKETIO_ENABLED: boolean;
  REDIS_HOST: string;
  REDIS_PORT: number;
  BACKEND_PORT: number;
  SQL_LOG: boolean;
  BASE_URL: string;
  SECURE_COOKIES: boolean;
  SENTRY_URL: string;
  DISABLE_ANONYMOUS_LOGIN: boolean;
  DISABLE_PASSWORD_LOGIN: boolean;
  DISABLE_PASSWORD_REGISTRATION: boolean;
  TWITTER_KEY: string;
  TWITTER_SECRET: string;
  GOOGLE_KEY: string;
  GOOGLE_SECRET: string;
  GITHUB_KEY: string;
  GITHUB_SECRET: string;
  SLACK_KEY: string;
  SLACK_SECRET: string;
  SLACK_BOT_ENABLE: boolean;
  MICROSOFT_KEY: string;
  MICROSOFT_SECRET: string;
  OKTA_AUDIENCE: string;
  OKTA_KEY: string;
  OKTA_SECRET: string;
  KEYCLOAK_REALM: string;
  KEYCLOAK_URL: string;
  KEYCLOAK_CLIENT_ID: string;
  KEYCLOAK_CLIENT_SECRET: string;
  SENDGRID_API_KEY: string;
  SENDGRID_SENDER: string;
  STRIPE_SECRET: string;
  STRIPE_WEBHOOK_SECRET: string;
  STRIPE_TEAM_PRODUCT: string;
  STRIPE_TEAM_PRICE: string;
  STRIPE_UNLIMITED_PRODUCT: string;
  STRIPE_UNLIMITED_PRICE: string;
  STRIPE_SELF_HOSTED_PRODUCT: string;
  STRIPE_SELF_HOSTED_URL_GBP: string;
  STRIPE_SELF_HOSTED_URL_EUR: string;
  STRIPE_SELF_HOSTED_URL_USD: string;
  RATE_LIMIT_WINDOW: number;
  RATE_LIMIT_MAX: number;
  RATE_LIMIT_WS_POINTS: number;
  RATE_LIMIT_WS_DURATION: number;
  WS_MAX_BUFFER_SIZE: number;
  MAIL_SMTP_HOST: string;
  MAIL_PORT: number;
  MAIL_SECURE: boolean;
  MAIL_USER: string;
  MAIL_PASSWORD: string;
  MAIL_SENDER: string;
  MAIL_ALLOW_SELF_SIGNED_CERTS: boolean;
}

export type LicenceMetadata = {
  licence: string;
  owner: string;
};
