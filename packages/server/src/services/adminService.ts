import { IAdmin } from "../interfaces/IAdmin";

import AdminRepository from "../repositories/adminRepository";

class AdminService {
    private adminRepository: AdminRepository;

    constructor(adminRepository: AdminRepository) {
      this.adminRepository = adminRepository;
    }

    async getAllAdmins(): Promise<IAdmin[]> {
      return await this.adminRepository.getAllAdmins();
    }

    async createAdmin(
      admin: IAdmin
      ): Promise<IAdmin> {
      return await this.adminRepository.createAdmin(
        admin
      );
    }
}

export default AdminService;