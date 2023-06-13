import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../../../scss/pageManagement/Employee/AddNewEmployee/EditEmployee.module.scss";
import { useParams } from "react-router-dom";
import { API } from "../../../../configAPI";
import Pathpage from "../../../../components/component/Pathpage";
import EmployeeInfor from "./EmployeeInfor";
import ContractInfor from "./ContractInfor";
import EmployeeDetails from "./EmployeeDetails";
import Salary from "./Salary";
import Other from "./Other";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { IFormValues } from "./interface";
import BtnAdd from "./BtnAdd";
import Loading from "../../../../components/component/Loading";

const pathPage = [
  { name: "General", link: "/General" },
  { name: "Employee Management", link: "/General/employee" },
  { name: "Edit employee" },
];
const EditEmployee = () => {
  const { id } = useParams();

  const [res, setRes] = useState<any>();

  const [activeMenuItem, setActiveMenuItem] = useState(0);

  const methods = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => console.log(data);

  useEffect(() => {
    axios({
      method: "GET",
      baseURL: API,
      url: `/employee/${id}`,
      headers: {
        Authorization: "Bearer" + localStorage.getItem("CheckToken"),
      },
    })
      .then((res) => setRes(res.data.data))
      .catch((err) => err);
  }, []);

  // console.log(res);

  const menuItems = [
    {
      id: 0,
      label: "Employee Information",
      content: <EmployeeInfor res={res} />,
    },
    {
      id: 1,
      label: "Contract Information",
      content: <ContractInfor res={res} />,
    },
    {
      id: 2,
      label: "Employment Details",
      content: <EmployeeDetails res={res} />,
    },
    { id: 3, label: "Salary & Wages", content: <Salary /> },
    { id: 4, label: "Others", content: <Other /> },
  ];

  const handleSubmitBtn = () => {
    axios({
      method: "PUT",
      baseURL: API,
      url: `/employee/${id}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("CheckToken"),
      },
      data: {
        account_user_id: null,
        attendance_allowance_paid: true,
        audit_salary: methods.getValues("salaryAudit"),
        bank_account_no: methods.getValues("bankAcc"),
        bank_name: methods.getValues("bankName"),
        basic_salary: methods.getValues("salary"),
        benefits: [123],
        card_number: methods.getValues("bankCard"),
        company_id: 1,
        contract_start_date: methods.getValues("dateStart"),
        contracts: [],
        deleted_ids: [],
        department_id: methods.getValues("department"),
        dob: methods.getValues("birth"),
        document_upload: null,
        documents: [],
        entitle_ot: false,
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
        meal_allowance_paid: false,
        mobile_no: methods.getValues("mobile"),
        mother_name: methods.getValues("motherName"),
        name: methods.getValues("name"),
        nc_id: methods.getValues("notional"),
        operational_allowance_paid: true,
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
      .then((res) => {})
      .catch((err) => err);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.container}>
          <Pathpage pathPage={pathPage} />

          {/* <ToastContainer /> */}

          <FormProvider {...methods}>
            <form action="" onSubmit={methods.handleSubmit(onSubmit)}>
              <div className={styles.header}>
                <p className={styles.title}>Employee Managenment</p>
                <BtnAdd
                  submit="submit"
                  handleSubmitBtn={handleSubmitBtn}
                  name="Save Change"
                />
                {methods.formState.isSubmitting && (
                  <div style={{ background: "red" }}>Submitting...</div>
                )}

                {/* {methods.formState.isSubmitSuccessful && (
              <Alert severity="success">Record added</Alert>
            )} */}
              </div>
              <div className={styles.item}>
                {menuItems.map((item) => (
                  <div
                    key={item.id}
                    className={activeMenuItem === item.id ? styles.active : ""}
                    onClick={() => setActiveMenuItem(item.id)}
                  >
                    <button type="button">{item.label}</button>
                  </div>
                ))}
              </div>

              <div className={styles.containerContent}>
                {menuItems[activeMenuItem].content}
              </div>
            </form>
          </FormProvider>

          <div className={styles.footer}>
            Copyright © 2022. All Rights Reserved
          </div>
        </div>
      )}
    </>
  );
};

export default EditEmployee;
