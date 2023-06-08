import { applicationConfig } from 'config';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: applicationConfig.db.host,
  port: 5432,
  username: applicationConfig.db.name,
  password: applicationConfig.db.password,
  database: applicationConfig.db.name,
  synchronize: false,
  logging: true,
  entities: ['src/**/*.entity.{ts.js}'],
  subscribers: [],
  migrations: ['migrations/*{.ts,.js}'],
});
