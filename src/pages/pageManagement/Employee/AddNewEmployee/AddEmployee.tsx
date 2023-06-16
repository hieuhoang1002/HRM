import React, { useState } from "react";
import styles from "./AddEmployee.module.scss";
import EmployeeInfor from "../component/EmployeeInfor";
import ContractInfor from "../component/ContractInfor";
import EmployeeDetails from "../component/EmployeeDetails";
import Salary from "../component/Salary";
import Other from "../component/Other";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { IFormValues } from "../component/interface";
import BtnAdd from "../component/BtnAdd";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { API } from "../../../../API/configAPI";
import Pathpage from "../../../../components/Pathpage";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const pathPage = [
  { name: "General", link: "/General" },
  { name: "Employee Management", link: "/General/employee" },
  { name: "Add new employee" },
];
const AddEmployee = () => {
  const navigate = useNavigate();

  const [activeMenuItem, setActiveMenuItem] = useState(0);

  const methods = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {};

  const menuItems = [
    {
      id: 0,
      label: "Employee Information",
      content: <EmployeeInfor res={""} />,
    },
    { id: 1, label: "Contract Information", content: <ContractInfor res="" /> },
    {
      id: 2,
      label: "Employment Details",
      content: <EmployeeDetails res={""} />,
    },
    { id: 3, label: "Salary & Wages", content: <Salary res={""} /> },
    { id: 4, label: "Others", content: <Other res={""} /> },
  ];

  const handleSubmitBtn = () => {
    axios({
      method: "POST",
      baseURL: API,
      url: "/employee",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("CheckToken"),
      },
      data: {
        account_user_id: null,
        attendance_allowance_paid: methods.getValues(
          "attendance_allowance_paid"
        ),
        audit_salary: methods.getValues("salaryAudit"),
        bank_account_no: methods.getValues("bankAcc"),
        bank_name: methods.getValues("bankName"),
        basic_salary: methods.getValues("salary"),
        card_number: methods.getValues("bankCard"),
        company_id: 1,
        contract_start_date: methods.getValues("dateStart"),
        contracts: [],
        deleted_ids: [],
        department_id: methods.getValues("department"),
        dob: methods.getValues("birth"),
        document_upload: null,
        documents: [],
        entitle_ot: methods.getValues("entitle_ot"),
        family_card_number: methods.getValues("familyCard"),
        gender: methods.getValues("gender"),
        grade: "",
        grade_id: methods.getValues("gradeId"),
        health_insurance: methods.getValues("healthyAmount"),
        health_insurance_no: methods.getValues("health"),
        home_address_1: methods.getValues("home1"),
        home_address_2: methods.getValues("home2"),
        ktp_no: methods.getValues("ktp"),
        marriage_id: methods.getValues("marriage"),
        meal_allowance: methods.getValues("mealAllowance"),
        meal_allowance_paid: methods.getValues("meal_allowance_paid"),
        mobile_no: methods.getValues("mobile"),
        mother_name: methods.getValues("motherName"),
        name: methods.getValues("name"),
        nc_id: methods.getValues("notional"),
        operational_allowance_paid: methods.getValues(
          "operational_allowance_paid"
        ),
        pob: methods.getValues("place"),
        position_id: methods.getValues("positionId"),
        remark: methods.getValues("remark"),
        safety_insurance: methods.getValues("safetyAmount"),
        safety_insurance_no: methods.getValues("safety"),
        staff_id: "",
        tel_no: methods.getValues("tel"),
        type: methods.getValues("type"),
        user: null,
        userAccount: null,
      },
    })
      .then((res) => {
        toast.success("Record added !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        navigate("/General/employee");
      })
      .catch((err) => err);
  };

  return (
    <div className={styles.container}>
      <Pathpage pathPage={pathPage} />

      <FormProvider {...methods}>
        <form action="" onSubmit={methods.handleSubmit(onSubmit)}>
          <div className={styles.header}>
            <p className={styles.title}>Employee Managenment</p>
            <BtnAdd
              submit="submit"
              handleSubmitBtn={handleSubmitBtn}
              name="Add"
              styles={
                methods.watch("name") &&
                methods.watch("gender") &&
                methods.watch("birth") &&
                methods.watch("ktp") &&
                methods.watch("notional") &&
                methods.watch("dateStart") &&
                methods.watch("type") &&
                methods.watch("salary") &&
                methods.watch("salaryAudit") &&
                methods.watch("safetyAmount") &&
                methods.watch("healthyAmount") &&
                methods.watch("mealAllowance")
                  ? "stylesAdd"
                  : "stylesRemoveAdd"
              }
            />
          </div>
          <div className={styles.item}>
            <div
              onClick={() => setActiveMenuItem(0)}
              className={
                activeMenuItem === 0
                  ? styles.active
                  : methods.watch("name") &&
                    methods.watch("gender") &&
                    methods.watch("birth") &&
                    methods.watch("ktp") &&
                    methods.watch("notional")
                  ? ""
                  : styles.error
              }
            >
              <Button
                variant="contained"
                disableElevation
                onClick={methods.handleSubmit(onSubmit)}
              >
                Employee Information
              </Button>
            </div>

            <div
              onClick={() => setActiveMenuItem(1)}
              className={
                activeMenuItem === 1
                  ? styles.active
                  : (methods.watch("dateStart")?.length === 0 ||
                      methods.watch("type")?.length === 0) &&
                    (activeMenuItem === 0
                      ? activeMenuItem === 0
                      : activeMenuItem === 2
                      ? activeMenuItem === 2
                      : activeMenuItem === 3
                      ? activeMenuItem === 3
                      : activeMenuItem === 4)
                  ? styles.error
                  : ""
              }
            >
              <Button
                variant="contained"
                disableElevation
                onClick={methods.handleSubmit(onSubmit)}
              >
                Contract Information
              </Button>
            </div>

            <div
              onClick={() => setActiveMenuItem(2)}
              className={activeMenuItem === 2 ? styles.active : ""}
            >
              <Button
                variant="contained"
                disableElevation
                onClick={methods.handleSubmit(onSubmit)}
              >
                Employment Details
              </Button>
            </div>

            <div
              onClick={() => setActiveMenuItem(3)}
              className={
                activeMenuItem === 3
                  ? styles.active
                  : (methods.watch("salary")?.length === 0 ||
                      methods.watch("salaryAudit")?.length === 0 ||
                      methods.watch("safetyAmount")?.length === 0 ||
                      methods.watch("healthyAmount")?.length === 0 ||
                      methods.watch("mealAllowance")?.length === 0) &&
                    (activeMenuItem === 0
                      ? activeMenuItem === 0
                      : activeMenuItem === 1
                      ? activeMenuItem === 1
                      : activeMenuItem === 2
                      ? activeMenuItem === 2
                      : activeMenuItem === 4)
                  ? styles.error
                  : ""
              }
            >
              <Button
                variant="contained"
                disableElevation
                onClick={methods.handleSubmit(onSubmit)}
              >
                Salary & Wages
              </Button>
            </div>
            <div
              onClick={() => setActiveMenuItem(4)}
              className={activeMenuItem === 4 ? styles.active : ""}
            >
              <Button
                variant="contained"
                disableElevation
                onClick={methods.handleSubmit(onSubmit)}
              >
                Others
              </Button>
            </div>
          </div>

          <div className={styles.containerContent}>
            {menuItems[activeMenuItem].content}
          </div>
        </form>
      </FormProvider>

      <div className={styles.footer}>Copyright © 2022. All Rights Reserved</div>
    </div>
  );
};

export default AddEmployee;
