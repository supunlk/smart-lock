enum EntityType {
  TENANT = 'TENANT',
  USER = 'USER',
  CUSTOMER = 'CUSTOMER',
  DEVICE = 'DEVICE',
}

enum Authority {
  TENANT_ADMIN = 'TENANT_ADMIN'
}

interface Entity<T = typeof EntityType> {
  entityType: T;
  id: string;
}

export interface User {
  id: Entity<EntityType.USER>;
  createdTime: number;
  additionalInfo: any;
  tenantId: Entity<EntityType.TENANT>;
  customerId: Entity<EntityType.CUSTOMER>;
  email: string;
  authority: Authority;
  firstName: string;
  lastName: string;
  ownerId: Entity<EntityType.TENANT>;
  name: string;
}

export interface UserDevice {
  id: Entity<EntityType.DEVICE>;
  createdTime: number;
  additionalInfo: any;
  tenantId: Entity<EntityType.TENANT>;
  customerId: Entity<EntityType.CUSTOMER>;
  name: string;
  type: string;
  ownerId: Entity<EntityType.TENANT>;
}
