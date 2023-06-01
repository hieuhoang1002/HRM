import React, { useEffect, useState } from "react";
import styles from "../../../scss/pageManagement/Employee/Table/Table.module.scss";
import axios from "axios";
import { API } from "../../../../configAPI";
import { TH } from "./configTable";
import { SubmitHandler, useForm } from "react-hook-form";

const texts = [
  "name",
  "card_number",
  "account_number",
  "family_card_number",
  "marriage_code",
  "mother_name",
  "dob",
  "home_address_1",
  "nc_id",
  "contract_start_date",
  "contract_first",
  "contract_second",
  "contract_end",
  "department_name",
  "employee_type",
  "basic_salary",
  "position_name",
  "entitle_ot",
  "meal_allowance_paid",
  "grade_name",
];

interface data {
  staff_id: string;
  gender: string;
  name: string;
  card_number: string;
  account_number: string;
  family_card_number: string;
  marriage_code: string;
  mother_name: string;
  dob: string;
  home_address_1: string;
  nc_id: string;
  contract_start_date: string;
  contract_first: string;
  contract_second: string;
  contract_end: string;
  department_name: string;
  employee_type: string;
  basic_salary: string;
  position_name: string;
  entitle_ot: string;
  meal_allowance_paid: string;
  grade_name: string;
}

type ArrayType<T> = {
  [Property in keyof T]: T[Property];
};

type propsTable = {
  search: string;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

interface IFormInputs {
  TextField: string;
  MyCheckbox: boolean;
}
const Table = (props: propsTable) => {
  const { handleSubmit, control, reset } = useForm<IFormInputs>({
    defaultValues: {
      MyCheckbox: false,
    },
  });
  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);
  // const [checked, setChecked] = useState<boolean>(false);
  // const [checkedContent, setCheckedContent] = useState<boolean>(checked);

  // const handleCheckedContent = () => {
  //   setCheckedContent(!checkedContent);
  // };
  const [res, setRes] = useState<ArrayType<data>[] | null>([
    {
      staff_id: "",
      gender: "",
      name: "",
      card_number: "",
      account_number: "",
      family_card_number: "",
      marriage_code: "",
      mother_name: "",
      dob: "",
      home_address_1: "",
      nc_id: "",
      contract_start_date: "",
      contract_first: "",
      contract_second: "",
      contract_end: "",
      department_name: "",
      employee_type: "",
      basic_salary: "",
      position_name: "",
      entitle_ot: "",
      meal_allowance_paid: "",
      grade_name: "",
    },
  ]);

  useEffect(() => {
    axios({
      method: "get",
      baseURL: API,
      url: "/employee",
      headers: {
        Authorization: localStorage.getItem("CheckToken"),
      },
    })
      .then((res) => {
        // console.log(res);
        const arr = res.data.data.data.map((item: data): data => {
          return {
            staff_id: item.staff_id,
            gender: item.gender,
            name: item.name,
            card_number: item.card_number,
            account_number: item.account_number,
            family_card_number: item.family_card_number,
            marriage_code: item.marriage_code,
            mother_name: item.mother_name,
            dob: item.dob,
            home_address_1: item.home_address_1,
            nc_id: item.nc_id,
            contract_start_date: item.contract_start_date,
            contract_first: item.contract_first,
            contract_second: item.contract_second,
            contract_end: item.contract_end,
            department_name: item.department_name,
            employee_type: item.employee_type,
            basic_salary: item.basic_salary,
            position_name: item.position_name,
            entitle_ot: item.entitle_ot,
            meal_allowance_paid: item.meal_allowance_paid,
            grade_name: item.grade_name,
          };
        });
        setRes(arr);
      })
      .catch((err) => console.log(err));
  }, []);
  // console.log(res);

  return (
    <div className={styles.container}>
      <div className={styles.containerHeader}>
        <div className={styles.checkboxHeader}>
          <input type="checkbox" />
        </div>

        {TH.map((th, i) => (
          <div key={i} className={styles.item}>
            {th}
          </div>
        ))}
      </div>

      {res
        ? res
            .filter((user) => user.name.toLowerCase().includes(props.search))
            .map((item: data) => (
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.containerContent}>
                  <div className={styles.checkboxContent}>
                    <input type="checkbox" />
                  </div>

                  <div className={styles.nik}>{item["staff_id"]}</div>

                  <div className={styles.content}>
                    {parseInt(item["gender"]) === 0 ? "Nam" : "Nữ"}
                  </div>
                  {texts.map(
                    (text): React.ReactNode => (
                      <div className={styles.content}>{item[text]}</div>
                    )
                  )}
                </div>
              </form>
            ))
        : ""}
    </div>
  );
};

export default Table;
