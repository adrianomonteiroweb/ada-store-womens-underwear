import { Router } from "express";

import AdminController from "../controllers/adminController";

class AdminRoutes {
    private router: Router;
    private isAdminController: AdminController;

    constructor() {
        this.router = Router();
        this.isAdminController = new AdminController();

        this.setupRoutes();
    }

    private setupRoutes(): void {
        this.router.get('/admins', this.isAdminController.getAllAdmins.bind(this.isAdminController));

        this.router.get("/", this.isAdminController.getAdmin.bind(this.isAdminController))
    }

    public getRouter(): Router {
        return this.router;
    }
}

export default AdminRoutes;