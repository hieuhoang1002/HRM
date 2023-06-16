import React, { useState, useMemo } from "react";
import styles from "../../scss/pageManagement//Employee/Employee.module.scss";
import { BsSearch } from "react-icons/bs";
import Table from "./Table/Table";
import Pathpage from "../../../components/Pathpage";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { API } from "../../../API/configAPI";
import { data, paginate } from "./Table/configTable";

const pathPage = [
  { name: "General", link: "/General" },
  { name: "Employee Management" },
];

type ArrayType<T> = {
  [Property in keyof T]: T[Property];
};
const Employee = () => {
  const [searchAPI, setSearchParams] = useSearchParams();
  const searchParams = useMemo(() => {
    return { page: "", search: "", ...Object.fromEntries([...searchAPI]) };
  }, [searchAPI]);

  const [search, setSearch] = useState<string>(searchParams.search || "");

  const handleSearchCurrentpage = (value) => {
    setSearch(value);
    setSearchParams({
      ...searchParams,
      search: value.toString(),
    });
  };

  const [res, setRes] = useState<ArrayType<data>[] | null>([
    {
      isChecked: false,
      id: "",
      staff_id: "",
      gender: "",
      name: "",
      card_number: "",
      bank_account_no: "",
      family_card_number: "",
      marriage_code: "",
      mother_name: "",
      dob: "",
      home_address_1: "",
      home_address_2: "",
      nc_id: "",
      contract_start_date: "",
      contract_first: "",
      contract_second: "",
      contract_end: "",
      department_name: "",
      type: "",
      basic_salary: "",
      position_name: "",
      entitle_ot: "",
      meal_allowance_paid: "",
      grade_name: "",
    },
  ]);

  const [paginate, setPaginate] = useState<ArrayType<paginate>[] | null>([
    {
      current_page: 1,
      per_page: 20,
      from: 1,
      to: 20,
      total: 0,
      first_page_url: "",
      last_page_url: "",
      pre_page_url: "",
      next_page_url: "",
    },
  ]);

  React.useEffect(() => {
    axios({
      method: "GET",
      baseURL: API,
      url: "/employee",
      headers: {
        Authorization: "Bearer" + localStorage.getItem("CheckToken"),
      },
    })
      .then((res) => {
        const arr = res.data.data.data.map((item: data): data => {
          return {
            isChecked: item.isChecked,
            id: item.id,
            staff_id: item.staff_id,
            gender: item.gender,
            name: item.name,
            card_number: item.card_number,
            bank_account_no: item.bank_account_no,
            family_card_number: item.family_card_number,
            marriage_code: item.marriage_code,
            mother_name: item.mother_name,
            dob: item.dob,
            home_address_1: item.home_address_1,
            home_address_2: item.home_address_2,
            nc_id: item.nc_id,
            contract_start_date: item.contract_start_date,
            contract_first: item.contract_first,
            contract_second: item.contract_second,
            contract_end: item.contract_end,
            department_name: item.department_name,
            type: item.type,
            basic_salary: item.basic_salary,
            position_name: item.position_name,
            entitle_ot: item.entitle_ot,
            meal_allowance_paid: item.meal_allowance_paid,
            grade_name: item.grade_name,
          };
        });
        setRes(arr);

        const resDataPaginate = res.data.data;
        const arrPaginate = [
          {
            current_page: resDataPaginate.current_page,
            per_page: resDataPaginate.per_page,
            from: resDataPaginate.from,
            to: resDataPaginate.to,
            total: resDataPaginate.total,
            first_page_url: resDataPaginate.first_page_url,
            last_page_url: resDataPaginate.last_page_url,
            pre_page_url: resDataPaginate.pre_page_url,
            next_page_url: resDataPaginate.next_page_url,
          },
        ];

        setPaginate(arrPaginate);
      })
      .catch((err) => err);
  }, []);

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
            onChange={(e) => handleSearchCurrentpage(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.containertable}>
        <Table search={search} res={res} paginate={paginate} />
      </div>

      <div className={styles.footer}>Copyright © 2022. All Rights Reserved</div>
    </div>
  );
};

export default Employee;
