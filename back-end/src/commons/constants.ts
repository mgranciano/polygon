export const SERVER_PORT = 'PORT';
export const SERVER_PORT_DEFAULT = 3000;
export const SERVER_PREFIX = 'PREFIX';
export const SERVER_PREFIX_DEFAULT = 'api/v';
export const RADIX_BASE = 10;

export const DB_HOST = 'DATABASE_HOST';
export const DB_PORT = 'DATABASE_PORT';
export const DB_USER = 'DATABASE_USERNAME';
export const DB_PASS = 'DATABASE_PASSWORD';
export const DB_NAME = 'DATABASE_NAME';

export enum AppRoles {
    MARKET = 'MARKET',
    ADMIN = 'ADMIN',
  }
  
  export enum AppResource {
    USER = 'USER',
    STOCK = 'STOCK',
  }
  
  export const JWT_SECRET = 'JWT_SECRET';
  export const JWT_TIME_EXPIRES = 'JWT_TIME_EXPIRES';

  export const LOGIN_OK = 'Access Granted.';
  export const LOGIN_FAILED = 'Login user or password does not match.';
  export const CREATE_USER_ERROR_01 = 'User already registered with email';
  export const SEARCH_USER_ERROR_01 = 'User does not exists or unauthorized'
