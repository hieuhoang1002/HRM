import React, { useEffect, useMemo, useState } from "react";
import styles from "../../../scss/pageManagement/Employee/Table/Table.module.scss";
import axios from "axios";
import { API } from "../../../../configAPI";
import { DATAS, TH } from "./configTable";
import { Checkbox } from "@material-ui/core";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { useSearchParams } from "react-router-dom";
import Item from "../Item";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const useStyles = makeStyles({
  root: {
    color: "",
    "&$checked": {
      color: "#30a46c",
    },
  },
  checked: {},
});

interface data {
  isChecked: boolean;
  id: string;
  staff_id: string;
  gender: string;
  name: string;
  card_number: string;
  bank_account_no: string;
  family_card_number: string;
  marriage_code: string;
  mother_name: string;
  dob: string;
  home_address_1: string;
  home_address_2: string;
  nc_id: string;
  contract_start_date: string;
  contract_first: string;
  contract_second: string;
  contract_end: string;
  department_name: string;
  type: string;
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
  res: any;
  paginate: any;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Table = (props: propsTable) => {
  // ========================================================

  const [res, setRes] = useState<ArrayType<data>[] | null>(props.res);

  //  Phân Trang
  const [paginate, setPaginate] = useState<ArrayType<paginate>[] | null>(
    props.paginate
  );

  const [searchAPI, setSearchParams] = useSearchParams();
  const searchParams = useMemo(() => {
    return { page: "1", search: "", ...Object.fromEntries([...searchAPI]) };
  }, [searchAPI]);

  // console.log(searchParams);
  // const currentPage = paginate[0].current_page;
  const perPage = paginate[0].per_page;
  const totalPage = paginate[0].total;
  const nPage = Math.ceil(totalPage / perPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);
  // console.log(numbers.length);
  const toPage = paginate[0].to;
  const fromPgae = paginate[0].from;

  useEffect(() => {
    if (Number(searchParams.page) < 1) {
      setSearchParams({
        ...searchParams,
        page: "1",
      });
    }
    if (nPage && Number(searchParams.page) > nPage) {
      setSearchParams({
        ...searchParams,
        page: nPage.toString(),
      });
    }
  }, [searchParams, nPage]);

  useEffect(() => {
    handleApiPage(Number(searchParams.page || 1), searchParams.search || "");
  }, [searchParams]);

  // console.log(searchParams.page);
  // ================================================================

  // Handle Phân Trang
  const handleApiPage = (currentPage: number, search?: string) => {
    axios({
      method: "GET",
      baseURL: API,
      url: `/employee?page=${currentPage}&search=${search || ""}`,
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
      .catch((err) => console.log(err));
  };

  const handleNumberCurrentPage = (event, currentPage: number) => {
    setSearchParams({
      ...searchParams,
      page: currentPage.toString(),
    });
    // console.log(event);
  };

  // =============================================================

  // Handle Checkbox

  const [arrId, setArrId] = useState([]);

  const [activeDelete, setActiveDelete] = useState<number>(0);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, name, checked } = e.target;

    if (name === "MyCheckboxAll") {
      let arr = res.map((item) => {
        return { ...item, isChecked: checked };
      });
      setRes(arr);

      setArrId(checked === true ? res.map((item) => item.id) : []);
    } else {
      let arr = res.map((item) =>
        item.staff_id === name ? { ...item, isChecked: checked } : item
      );
      setRes(arr);

      if (checked === true) {
        const newArray = [...arrId, Number(id)];
        setArrId(newArray);
      } else {
        let index = arrId.indexOf(Number(id));
        if (index !== -1) {
          arrId.splice(index, 1);
        }
      }
    }
  };

  useEffect(() => {
    setActiveDelete(arrId.length);
  }, [arrId.length]);

  const handleDeleteChange = () => {
    axios({
      method: "DELETE",
      baseURL: API,
      url: "/employee/multiple-delete",
      headers: {
        authorization: "Bearer" + localStorage.getItem("CheckToken"),
      },
      data: {
        record_ids: arrId,
      },
    })
      .then((res) =>
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
          .catch((err) => console.log(err))
      )
      .catch((err) => console.log(err));
  };

  const handleDoubleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const id = Number(e.currentTarget.dataset.id);
    window.open(`employee/create-or-update/${id}`, "_self");
  };

  const classes = useStyles();
  return (
    <div className={styles.container}>
      <Item
        handleDeleteChange={handleDeleteChange}
        activeDelete={activeDelete}
      />
      <hr />
      <div className={styles.containerTable}>
        <div className={styles.containerHeader}>
          <div className={styles.checkboxHeader}>
            <Checkbox
              name="MyCheckboxAll"
              classes={{
                root: classes.root,
                checked: classes.checked,
              }}
              indeterminate={
                arrId.length < toPage - fromPgae + 1 && arrId.length > 0
                  ? true
                  : false
              }
              checked={
                res.filter((item) => item?.isChecked !== true).length < 1
              }
              onChange={handleCheckboxChange}
            />
          </div>

          {TH.map((th, i) => (
            <div key={"th" + i} className={styles.item}>
              {th}
            </div>
          ))}
        </div>

        {res
          ? res.map((item: data, i: any) => (
              <div
                className={styles.containerContent}
                key={"table" + i}
                onDoubleClick={handleDoubleClick}
                data-id={item["id"]}
              >
                <div className={styles.checkboxContent}>
                  <Checkbox
                    id={item["id"].toString()}
                    name={item["staff_id"]}
                    classes={{
                      root: classes.root,
                      checked: classes.checked,
                    }}
                    checked={item?.isChecked || false}
                    onChange={handleCheckboxChange}
                  />
                </div>

                <div className={styles.nik}>{item["staff_id"]}</div>

                <div className={styles.content}>
                  {parseInt(item["gender"]) === 0 ? "Male" : "Female"}
                </div>
                {DATAS.map(
                  (data, i): React.ReactNode =>
                    data === "type" ? (
                      <div className={styles.content} key={"data" + i}>
                        {parseInt(item["type"]) === 0
                          ? "Permanent"
                          : parseInt(item["type"]) === 1
                          ? "Part-time"
                          : "Contract"}
                      </div>
                    ) : data === "entitle_ot" ? (
                      <div className={styles.content} key={"data" + i}>
                        {parseInt(item["entitle_ot"]) === 1
                          ? "Yes"
                          : parseInt(item["entitle_ot"]) === 0
                          ? "No"
                          : ""}
                      </div>
                    ) : data === "meal_allowance_paid" ? (
                      <div className={styles.content} key={"data" + i}>
                        {parseInt(item["meal_allowance_paid"]) === 1
                          ? "Yes"
                          : parseInt(item["meal_allowance_paid"]) === 0
                          ? "No"
                          : ""}
                      </div>
                    ) : (
                      <div className={styles.content} key={"data" + i}>
                        {item[data]}
                      </div>
                    )
                )}
              </div>
            ))
          : ""}
      </div>

      {paginate
        ? paginate.map((item: paginate, i: number) => (
            <div key={"paginate" + i} className={styles.paginate}>
              <div>
                <Pagination
                  showFirstButton
                  showLastButton
                  className={styles.pagination}
                  count={numbers.length}
                  page={Number(searchParams.page)}
                  onChange={handleNumberCurrentPage}
                />
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
