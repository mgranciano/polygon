import { RolesBuilder } from 'nest-access-control';
import { AppResource, AppRoles } from './constants';

export const roles: RolesBuilder = new RolesBuilder();

roles
  .grant(AppRoles.USER)
  .readOwn([AppResource.USER])
  //.updateOwn([AppResource.USER])
  //.deleteOwn([AppResource.USER])
  .readOwn([AppResource.MARKET])
  .updateOwn([AppResource.MARKET])
  .deleteOwn([AppResource.MARKET])
  .createOwn([AppResource.STOCK])
  .updateOwn([AppResource.STOCK])
  .deleteOwn([AppResource.STOCK])
  .readOwn([AppResource.STOCK])
  .grant(AppRoles.ADMIN)
  .extend(AppRoles.USER)
  .createAny([AppResource.USER])
  .updateAny([AppResource.STOCK, AppResource.USER, AppResource.MARKET])
  .deleteAny([AppResource.STOCK, AppResource.USER, AppResource.MARKET]);