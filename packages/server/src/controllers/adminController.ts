import { Request, Response } from "express";

import AdminService from "../services/adminService";

class AdminController {
  private adminService: AdminService;

  constructor(adminService: AdminService) {
    this.adminService = adminService;
  }

  public async getAdmin(_req: Request, res: Response): Promise<Response> {
    return res
      .status(200)
      .json({ message: "Ada Store - Admin rote" });
  }

  public async getAllAdmins(_req: Request, res: Response): Promise<Response> {
    try {
      const allAdmins = await this.adminService.getAllAdmins();

      return res
        .status(200)
        .json(allAdmins);
    } catch (error: any) {
      return res
        .status(500)
        .json({ message: error.message });
    }
  }

  public async createAdmin(req: Request, res: Response): Promise<Response> {
    try {
      const adminCreated = await this.adminService.createAdmin(
        req.body
      );

      return res
        .status(201)
        .json({ adminId: adminCreated.adminId });
    } catch (error: any) {
      return res
        .status(500)
        .json({ message: error.message });
    }
  }
}

export default AdminController;