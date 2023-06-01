import React, { useState } from "react";
import styles from "../../scss/pageManagement//Employee/Employee.module.scss";
import { BsSearch } from "react-icons/bs";
import Item from "./Item";
import Table from "./Table/Table";

const Employee = () => {
  const [search, setSearch] = useState<string>("");

  return (
    <div className={styles.container}>
      <div>
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
        <Item />
        <hr />
        <Table search={search} />
      </div>

      <div className={styles.copyright}>
        Copyright © 2022. All Rights Reserved
      </div>
    </div>
  );
};

export default Employee;
