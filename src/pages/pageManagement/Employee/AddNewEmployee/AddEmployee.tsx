import React, { useState } from "react";
import styles from "../../../scss/pageManagement/Employee/AddNewEmployee/AddEmployee.module.scss";
import EmployeeInfor from "./EmployeeInfor";
import ContractInfor from "./ContractInfor";
import EmployeeDetails from "./EmployeeDetails";
import Salary from "./Salary";
import Other from "./Other";

const menuItems = [
  { id: 0, label: "Employee Information", content: <EmployeeInfor /> },
  { id: 1, label: "Contract Information", content: <ContractInfor /> },
  { id: 2, label: "Employment Details", content: <EmployeeDetails /> },
  { id: 3, label: "Salary & Wages", content: <Salary /> },
  { id: 4, label: "Others", content: <Other /> },
];

const AddEmployee = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.title}>Employee Managenment</p>
        <button className={styles.add}>Add</button>
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
    </div>
  );
};

export default AddEmployee;
