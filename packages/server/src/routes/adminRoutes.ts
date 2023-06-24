import { Router } from "express";

class AdminRoutes {
    private router: Router;

    constructor() {
        this.router = Router();

        this.setupRoutes();
    }

    private setupRoutes(): void {
        this.router.get('/admins');
    }

    public getRouter(): Router {
        return this.router;
    }
}

export default AdminRoutes;