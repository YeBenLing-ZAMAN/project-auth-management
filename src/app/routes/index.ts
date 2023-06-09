import express from "express";
import { UserRoutes } from "../modules/users/user.routes";
import { AcademicSemesterRoutes } from "../modules/academicSemester/academicSemester.router";
import { AcademicFacultyRoutes } from "../modules/academicFaculty/academicFaculty.route";
import { academicDepartmentRoutes } from "../modules/academicDepartment/academicDepartment.route";
import { StudentRoutes } from "../modules/student/student.routes";
import { FacultyRoutes } from "../modules/faculty/faculty.route";
import { ManagementDepartmentRoutes } from "../modules/managementDepartment/managementDepartment.route";
import { AdminRoutes } from "../modules/admin/admin.route";
import { AuthRoutes } from "../modules/auth/auth.route";

const router = express.Router();

const moduleRoutes = [
  { path: "/user", route: UserRoutes },
  { path: "/academic-semester", route: AcademicSemesterRoutes },
  { path: "/academic-faculties", route: AcademicFacultyRoutes },
  { path: "/academic-departments", route: academicDepartmentRoutes },
  { path: "/students", route: StudentRoutes },
  { path: "/faculties", route: FacultyRoutes },
  { path: "/management-departments", route: ManagementDepartmentRoutes },
  { path: "/admins", route: AdminRoutes },
  { path: "/auth", route: AuthRoutes },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
