import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  synchronize: false,
  logging: true,
  entities: ['src/**/*.entity.{ts.js}'],
  subscribers: [],
  migrations: ['migrations/*{.ts,.js}'],
});
