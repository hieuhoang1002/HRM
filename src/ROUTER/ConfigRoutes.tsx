import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "../pages/SignIn";
import ForgotPassword from "../pages/ForgotPassword";
import NewPassWord from "../pages/NewPassWord";
import { ROUTES } from "./Routes";
import General from "../pages/General";
import Employee from "../pages/pageManagement/Employee/Employee";
import Attendance from "../pages/pageManagement/Attendance";
import Leave from "../pages/pageManagement/Leave";
import Payroll from "../pages/pageManagement/Payroll";
import User from "../pages/pageManagement/User";
import Master from "../pages/pageManagement/Master";
import PrivateRoute from "./PrivateRoute";
import AddEmployee from "../pages/pageManagement/Employee/AddNewEmployee/AddEmployee";
import GlobalSettings from "../pages/pageManagement/GlobalSettings";
import EditEmployee from "../pages/pageManagement/Employee/EditEmployee/EditEmployee";
import Settings from "../pages/pageManagement/Settings/Settings";
import ChangePassWord from "../pages/pageManagement/Settings/ChangePassWord";

const ConfigRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.signIn} element={<SignIn />} />
      <Route path={ROUTES.forgotPassword} element={<ForgotPassword />} />
      <Route path={ROUTES.newPassWord} element={<NewPassWord />} />

      <Route element={<PrivateRoute />}>
        <Route path={ROUTES.general} element={<General />}>
          <Route path={ROUTES.attendance} element={<Attendance />} />
          <Route path={ROUTES.leave} element={<Leave />} />
          <Route path={ROUTES.payroll} element={<Payroll />} />
          <Route path={ROUTES.employee} element={<Employee />} />
          <Route path={ROUTES.user} element={<User />} />
          <Route path={ROUTES.master} element={<Master />} />
          <Route path={ROUTES.globalsettings} element={<GlobalSettings />} />
          <Route path={ROUTES.settings} element={<Settings />} />

          <Route path={ROUTES.addemployee} element={<AddEmployee />} />
          <Route path={ROUTES.editemployee} element={<EditEmployee />} />

          <Route path={ROUTES.changepassword} element={<ChangePassWord />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default ConfigRoutes;
