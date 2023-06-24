import express, { Express } from "express";

import routes from "./routes";

class App {
  private expressApp: Express;

  constructor() {
    this.expressApp = express();
    this.expressApp.use(express.json());
  }

  public startServer(port: number): void {
    this.expressApp.listen(port, () => {
      console.log(`Server is running on ${port} port`);
    });
  }

  public useRoutes(): void {
    this.expressApp.use(routes);
  }
}

export default App;
