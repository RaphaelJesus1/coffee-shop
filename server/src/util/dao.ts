import { createPool } from "mysql2";
import * as dotenv from "dotenv";

export class DatabaseError extends Error {
  payload: { params: unknown };
  constructor(message: string, params: unknown) {
    super();
    Object.setPrototypeOf(this, DatabaseError.prototype);
    this.message = message;
    this.payload = { params };
  }
}

dotenv.config();
const DAO = createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  database: process.env.MYSQL_DB,
  password: process.env.MYSQL_PWD,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  namedPlaceholders: true,
  multipleStatements: true,
}).promise();

export { DAO };
