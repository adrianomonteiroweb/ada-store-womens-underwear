import express, { Express } from "express";

import routes from "./routes";

class App {
  private expressApp: Express;

  constructor() {
    this.expressApp = express();
    this.expressApp.use(express.json());

    this.useRoutes();
  }

  public startServer(port: number): void {
    this.expressApp.listen(port, () => {
      console.log(`Server is running on ${port} port`);
    });
  }

  public useRoutes(): void {
    this.expressApp.use(routes);
    console.log("using routes");
    
  }
}

export default App;
