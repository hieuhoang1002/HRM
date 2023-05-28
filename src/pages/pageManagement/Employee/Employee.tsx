import React from "react";
import styles from "../../scss/pageManagement//Employee/Employee.module.scss";
import { BsSearch } from "react-icons/bs";
import Item from "./Item";
import Table from "./Table/Table";

const Employee = () => {
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.title}>Employee Managenment</p>
        <div className={styles.search}>
          <div>
            <BsSearch className={styles.icon} />
          </div>
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className={styles.containertable}>
        <Item />
        <hr />
        <Table />
      </div>
    </div>
  );
};

export default Employee;
