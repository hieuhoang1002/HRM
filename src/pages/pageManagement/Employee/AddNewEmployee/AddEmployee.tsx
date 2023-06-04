import React, { useState } from "react";
import styles from "../../../scss/pageManagement/Employee/AddNewEmployee/AddEmployee.module.scss";
import EmployeeInfor from "./EmployeeInfor";
import ContractInfor from "./ContractInfor";
import EmployeeDetails from "./EmployeeDetails";
import Salary from "./Salary";
import Other from "./Other";
import Add from "./Add";
import { SubmitHandler, useForm } from "react-hook-form";
import { IFormValues } from "./interface";

const menuItems = [
  { id: 0, label: "Employee Information", content: <EmployeeInfor /> },
  { id: 1, label: "Contract Information", content: <ContractInfor /> },
  { id: 2, label: "Employment Details", content: <EmployeeDetails /> },
  { id: 3, label: "Salary & Wages", content: <Salary /> },
  { id: 4, label: "Others", content: <Other /> },
];

const AddEmployee = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(0);

  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm<IFormValues>();

  // const onSubmit: SubmitHandler<IFormValues> = (data) => console.log(data);

  return (
    <div className={styles.container}>
      {/* <form action="" onSubmit={handleSubmit(onSubmit)}> */}
      <div className={styles.header}>
        <p className={styles.title}>Employee Managenment</p>
        {/* <Add /> */}
      </div>
      <div className={styles.item}>
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={activeMenuItem === item.id ? styles.active : ""}
            onClick={() => setActiveMenuItem(item.id)}
          >
            <button>{item.label}</button>
          </div>
        ))}
      </div>

      <div className={styles.containerContent}>
        {menuItems[activeMenuItem].content}
      </div>
      {/* </form> */}

      <div className={styles.copyright}>
        Copyright © 2022. All Rights Reserved
      </div>
    </div>
  );
};

export default AddEmployee;
