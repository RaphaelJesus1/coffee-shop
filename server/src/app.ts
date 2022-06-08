import express, { Application } from "express";
import cors from "cors";
import { BaseRouter } from "./routes";
import * as http from "http";
import * as dotenv from "dotenv";

dotenv.config();
const { PORT, ENVIRONMENT, SESSION_SECRET } = process.env;

class App {
  public express: Application;
  public server: http.Server;
  public port: number;

  public constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    if (PORT) {
      this.port = parseInt(PORT);
    } else {
      this.port = 3000;
    }
    this.server = http.createServer(this.express);
    this.listen();
  }

  private middleware(): void {
    this.express.use(express.json());

    this.express.use(
      cors({
        credentials: true,
        origin: ["http://localhost:3000"],
      })
    );
  }

  private routes(): void {
    this.express.use("/api", BaseRouter);
  }

  private listen(): void {
    this.server.listen(this.port, "0.0.0.0", () => {
      console.log(
        `App listening on port ${this.port} 😉 \nlink: http://localhost:${this.port} \nto quit press CTR + C`
      );
    });
  }
}

export default App;
