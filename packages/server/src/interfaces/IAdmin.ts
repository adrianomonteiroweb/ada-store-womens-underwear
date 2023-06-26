export interface IAdmin {
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
}
