const { DataSource } = require("typeorm");

require('dotenv').config()

module.exports = new DataSource({
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: ['dist/**/*.entity.js'],
  migrationsTableName: 'migration_table',
  migrations: ['dist/migrations/**/*.js'],
  synchronize: false,
  cli: {
    migrationsDir: 'src/migrations'
  }
})