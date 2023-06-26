import express, { Express } from "express";

import routes from "./routes";

import RunConnection from "./models/connection";

class App {
  private expressApp: Express;
  private connection;

  constructor() {
    this.expressApp = express();
    this.expressApp.use(express.json());
    this.connection = new RunConnection();

    this.useRoutes();
  }

  public startServer(port: number): void {
    this.expressApp.listen(port, () => {
      console.log(`Server is running on ${port} port`);
    });

    this.connection.connection();
  }

  public useRoutes(): void {
    this.expressApp.use(routes);
  }
}

export default App;
