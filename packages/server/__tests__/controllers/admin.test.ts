describe("Admin controller tests", () => {
    let adminController: any;
    let adminService: any;

    beforeEach(() => {
        const adminRepository = new AdminRepository();

        adminService = new AdminService(adminController);
        adminController = new adminController(adminService);
    });

    describe("GET method for admins", () => {
        it("Should return all administrators", () => {
            const mockAdmins = [
                { adminId: 1, firstName: "Admin 1", lastName: "Admin 1" }, email: "admin1@gmail.com", password: "admin1password", role: "superadmin", createdDate: "", lastLoginDate: "", isActive: true, permissions: []
            ];

            jest.spyOn(adminService, "getAllAdmin").mockReturnValue(mockAdmins);

            const req: any = {};
            const res: any = {
                json: jest.fn(),
            };

            adminController.index(req, res);

            expect(res.json).toHaveBeenCalledWith(mockAdmins);
        })
    })
})