export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 3306),
      database: process.env.DB_SCHEMA_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
    }
  });