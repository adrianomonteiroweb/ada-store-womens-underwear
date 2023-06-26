import { Router } from "express";

import AdminController from "../controllers/adminController";
import AdminService from "../services/adminService";
import AdminRepository from "../repositories/adminRepository";

class AdminRoutes {
  private router: Router;
  private isAdminController: AdminController;
  private adminRepository: AdminRepository;
  private adminService: AdminService;

  constructor() {
    this.router = Router();
    this.adminRepository = new AdminRepository();
    this.adminService = new AdminService(this.adminRepository)
    this.isAdminController = new AdminController(this.adminService);

    this.setupRoutes();
  }

  private setupRoutes(): void {
    this.router.get('/admins', this.isAdminController.getAllAdmins.bind(this.isAdminController));

    this.router.get("/", this.isAdminController.getAdmin.bind(this.isAdminController));
  }

  public getRouter(): Router {
    return this.router;
  }
}

export default AdminRoutes;