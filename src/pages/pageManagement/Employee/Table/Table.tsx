import React, { useEffect, useState } from "react";
import styles from "../../../scss/pageManagement/Employee/Table/Table.module.scss";
import axios from "axios";
import { API } from "../../../../configAPI";
import { DATAS, TH } from "./configTable";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { TextField, Checkbox } from "@material-ui/core";
import {
  AiOutlineDoubleLeft,
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineDoubleRight,
} from "react-icons/ai";
import { Link } from "react-router-dom";

interface data {
  id: number;
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

interface paginate {
  current_page: number;
  per_page: number;
  from: number;
  to: number;
  total: number;
  first_page_url: string;
  last_page_url: string;
  pre_page_url: string;
  next_page_url: string;
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
  // ========================================================

  const { handleSubmit, control, reset, watch } = useForm<IFormInputs>({
    defaultValues: {
      MyCheckbox: false,
    },
  });
  const onSubmit: SubmitHandler<IFormInputs> = (data) => {};

  const [res, setRes] = useState<ArrayType<data>[] | null>([
    {
      id: 10,
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

  //  Phân Trang
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
  // console.log(paginate[0].total);
  // console.log(paginate);

  const currentPage = paginate[0].current_page;
  const nextpage = paginate[0].next_page_url;
  const perPage = paginate[0].per_page;
  const totalPage = paginate[0].total;
  const nPage = Math.ceil(totalPage / perPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);
  // console.log(numbers);
  const [page, setPage] = useState<number>(currentPage);

  // ================================================================

  useEffect(() => {
    axios({
      method: "GET",
      baseURL: API,
      url: "/employee",
      headers: {
        Authorization: localStorage.getItem("CheckToken"),
      },
    })
      .then((res) => {
        // console.log(res);
        // console.log(res.data.data.total);

        const arr = res.data.data.data.map((item: data): data => {
          return {
            id: item.id,
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
      .catch((err) => console.log(err));
  }, []);

  // Handle Phân Trang
  const handleApiPage = (currentPage: number) => {
    axios({
      method: "GET",
      baseURL: API,
      url: `/employee?page=${currentPage}`,
      headers: {
        Authorization: localStorage.getItem("CheckToken"),
      },
    })
      .then((res) => {
        const arr = res.data.data.data.map((item: data): data => {
          return {
            id: item.id,
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
      .catch((err) => console.log(err));
  };

  const handleCurrentPage = (currentPage: number) => {
    setPage(currentPage);
  };

  const handleFirstPage = () => {
    setPage(1);
  };

  const handlePrevPage = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page !== nPage) {
      setPage(page + 1);
    }
  };

  const handleLastPage = () => {
    setPage(nPage);
  };

  const handleNumberCurrentPage = (currentPage: number) => {
    handleCurrentPage(currentPage);
    handleApiPage(currentPage);
  };

  const handleFirstCurrentPage = (currentPage: number) => {
    handleFirstPage();
    handleApiPage(currentPage);
  };

  const handlePrevCurrentPage = (currentPage: number) => {
    handlePrevPage();
    if (currentPage !== 1) {
      handleApiPage(currentPage - 1);
    }
  };

  const handleNextCurrentPage = (currentPage: number) => {
    handleNextPage();
    if (currentPage !== nPage) {
      handleApiPage(currentPage + 1);
    }
  };

  const handleLastCurrentPage = (currentPage: number) => {
    handleLastPage();
    handleApiPage(currentPage);
  };

  const handleDelete = () => {
    res.map((item) => {
      axios({
        method: "DELETE",
        baseURL: API,
        url: "/employee/multiple-delete",
        headers: { record_ids: item.id },

        data: {
          record_ids: [item.id],
        },
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerTable}>
        <div className={styles.containerHeader}>
          <div className={styles.checkboxHeader}>
            <Controller
              name="MyCheckbox"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <Checkbox {...field} color="secondary" />}
            />
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
                      <Controller
                        name="MyCheckbox"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                          <Checkbox {...field} color="secondary" />
                        )}
                      />
                    </div>

                    <div className={styles.nik}>{item["staff_id"]}</div>

                    <div className={styles.content}>
                      {parseInt(item["gender"]) === 0 ? "Nam" : "Nữ"}
                    </div>
                    {DATAS.map(
                      (data): React.ReactNode => (
                        <div className={styles.content}>{item[data]}</div>
                      )
                    )}
                  </div>
                  {/* <button type="submit">BTN</button> */}
                </form>
              ))
          : ""}
      </div>

      {paginate
        ? paginate.map((item: paginate) => (
            <div className={styles.paginate}>
              <div onClick={() => handleFirstCurrentPage(1)}>
                <AiOutlineDoubleLeft className={styles.firstPage} />
              </div>

              <div onClick={() => handlePrevCurrentPage(page)}>
                <AiOutlineLeft className={styles.prevPage} />
              </div>

              {numbers.map((numberPage) => (
                <div>
                  <div className={page === numberPage ? styles.active : ""}>
                    <Link
                      className={styles.currentPage}
                      to={`?page=${numberPage}`}
                      onClick={() => handleNumberCurrentPage(numberPage)}
                    >
                      {numberPage}
                    </Link>
                  </div>
                </div>
              ))}

              <div onClick={() => handleNextCurrentPage(page)}>
                <AiOutlineRight className={styles.nextPage} />
              </div>

              <div onClick={() => handleLastCurrentPage(nPage)}>
                <AiOutlineDoubleRight className={styles.lastPage} />
              </div>
              <div className={styles.allPage}>
                {item.from} - {item.to} of {item.total}
              </div>
            </div>
          ))
        : ""}
    </div>
  );
};

export default Table;
