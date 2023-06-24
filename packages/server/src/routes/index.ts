import AdminRoutes from "./adminRoutes";

const isAdminRoutes: any = new AdminRoutes();

const routes: Array<any> = [
    isAdminRoutes.getRouter(),
];

export default routes;