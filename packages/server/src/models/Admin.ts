class AdminModel {
  private adminId: string;
  private firstName: string;
  private lastName: string;
  private email: string;
  private password: string;
  private role: string;
  private createdDate: string;
  private lastLoginDate: string;
  private isActive: boolean;
  private permissions: Array<string>;

  constructor(
    adminId: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: string,
    createdDate: string,
    lastLoginDate: string,
    isActive: boolean,
    permissions: Array<string>
  ) {
    this.adminId = adminId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.role = role;
    this.createdDate = createdDate;
    this.lastLoginDate = lastLoginDate;
    this.isActive = isActive;
    this.permissions = permissions;
  }

  getAdminId(): string {
    return this.adminId;
  }

  getAdminPassword(): string {
    return this.email;
  }
}

export default AdminModel;