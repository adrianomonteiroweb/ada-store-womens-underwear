import { Request, Response } from "express";

class AdminController {
  public async getAdmin(_req: Request, res: Response): Promise<Response> {
    return res
      .status(200)
      .json({ message: "Ada Store - Admin rote" });
  }

  public async getAllAdmins(_req: Request, res: Response): Promise<Response> {
    return res
      .status(200)
      .json({ id: 1 });
  }
}

export default AdminController;