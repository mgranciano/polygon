import { RolesBuilder } from 'nest-access-control';
import { AppResource, AppRoles } from './constants';

export const roles: RolesBuilder = new RolesBuilder();

roles
  .grant(AppRoles.MARKET)
  .readOwn([AppResource.USER])
  .updateOwn([AppResource.USER])
  .deleteOwn([AppResource.USER])
  .createOwn([AppResource.STOCK])
  .updateOwn([AppResource.STOCK])
  .deleteOwn([AppResource.STOCK])
  .readOwn([AppResource.STOCK])
  .grant(AppRoles.ADMIN)
  .extend(AppRoles.MARKET)
  .createAny([AppResource.USER])
  .updateAny([AppResource.STOCK, AppResource.USER])
  .deleteAny([AppResource.STOCK, AppResource.USER]);