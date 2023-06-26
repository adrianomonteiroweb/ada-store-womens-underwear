import { PrismaClient } from "@prisma/client";

import { IAdmin } from "../interfaces/IAdmin";

const prisma = new PrismaClient();

class AdminRepository {
  async getAllAdmins(): Promise<IAdmin[]> {
    const allAdmins = await prisma.adminModel.findMany();

    return allAdmins;
  }
}

export default AdminRepository;