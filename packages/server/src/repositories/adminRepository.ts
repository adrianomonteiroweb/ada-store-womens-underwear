import { PrismaClient } from "@prisma/client";

import { IAdmin } from "../interfaces/IAdmin";
import { ObjectId } from "mongodb";

const prisma = new PrismaClient();

class AdminRepository {
  async getAllAdmins(): Promise<IAdmin[]> {
    const allAdmins = await prisma.adminModel.findMany();

    return allAdmins;
  }

  async createAdmin(
    admin: IAdmin
  ): Promise<IAdmin> {
    const adminCreated = await prisma.adminModel.create({
      data: {
        ...admin,
        adminId: new ObjectId().toString()
      }
    });

    return adminCreated;
  }
}

export default AdminRepository;