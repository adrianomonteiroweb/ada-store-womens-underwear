import express, { Express } from "express";

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
}

export default App;
