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
    // Get all admins
    this.router.get("/admins", this.isAdminController.getAllAdmins.bind(this.isAdminController));
    // create an admin
    this.router.post("/admin", this.isAdminController.createAdmin.bind(this.isAdminController));

    this.router.get("/", this.isAdminController.getAdmin.bind(this.isAdminController));
  }

  public getRouter(): Router {
    return this.router;
  }
}

export default AdminRoutes;