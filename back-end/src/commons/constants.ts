export const SERVER_PORT = 'PORT';
export const SERVER_PREFIX = 'PREFIX';
export const RADIX_BASE = 10;

export const SERVER_PORT_DEFAULT = 3000;
export const SERVER_PREFIX_DEFAULT = 'api/v';

export const DB_HOST = 'DATABASE_HOST';
export const DB_PORT = 'DATABASE_PORT';
export const DB_USER = 'DATABASE_USERNAME';
export const DB_PASS = 'DATABASE_PASSWORD';
export const DB_NAME = 'DATABASE_NAME';
export const API_POLYGON_BASE = 'API_POLYGON_BASE';
export const API_POLIGON_TOKEN = 'API_POLIGON_TOKEN';
export const API_ENDPOINT_REFENRENCE_V3 = 'API_ENDPOINT_REFENRENCE_V3';
export const API_ENDPOINT_AGGS_V2 = 'API_ENDPOINT_AGGS_V2';

export enum AppRoles {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export enum AppResource {
  USER = 'USER',
  STOCK = 'STOCK',
  MARKET = 'MARKET',
}

export const JWT_SECRET = 'JWT_SECRET';
export const JWT_TIME_EXPIRES = 'JWT_TIME_EXPIRES';

export const LOGIN_OK = 'Access Granted.';
export const LOGIN_FAILED = 'Login user or password does not match.';
export const CREATE_USER_ERROR_01 = 'User already registered with email';
export const SEARCH_USER_ERROR_01 = 'User does not exists or unauthorized';
export const HTTP_SERVER_OK = 'OK';
export const HTTP_SERVER_FAILED = 'Internal server error';
