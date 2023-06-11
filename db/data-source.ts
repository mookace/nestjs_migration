import { DataSourceOptions, DataSource } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'satao.db.elephantsql.com',
  port: 5432,
  username: 'asbphyui',
  password: 'IkOyOz0-4J_n8kAel-9BatVqribuDL17',
  database: 'asbphyui',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
