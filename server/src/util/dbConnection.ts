import * as dotenv from "dotenv";
import { createConnection } from "mysql2/promise";

dotenv.config();
const dbConnection = () => createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  database: process.env.MYSQL_DB,
  password: process.env.MYSQL_PWD,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  namedPlaceholders: true,
});

export { dbConnection };
