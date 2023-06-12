import React, { useState } from "react";
import styles from "../../scss/pageManagement//Employee/Employee.module.scss";
import { BsSearch } from "react-icons/bs";
import Table from "./Table/Table";
import Pathpage from "../../../components/component/Pathpage";

const pathPage = [
  { name: "General", link: "/General" },
  { name: "Employee Management" },
];
const Employee = () => {
  const [search, setSearch] = useState<string>("");

  return (
    <div className={styles.container}>
      <Pathpage pathPage={pathPage} />
      <div className={styles.titleAndsearch}>
        <p className={styles.title}>Employee Managenment</p>
        <div className={styles.search}>
          <div>
            <BsSearch className={styles.icon} />
          </div>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.containertable}>
        {/* <Item /> */}
        {/* <hr /> */}
        <Table search={search} />
      </div>

      <div className={styles.copyright}>
        Copyright © 2022. All Rights Reserved
      </div>
    </div>
  );
};

export default Employee;
