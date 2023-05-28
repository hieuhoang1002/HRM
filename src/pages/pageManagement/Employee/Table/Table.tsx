import React, { useEffect, useState } from "react";
import styles from "../../../scss/pageManagement/Employee/Table/Table.module.scss";
import axios from "axios";
import { API } from "../../../../configAPI";
import { TH } from "./configTable";

const datas = ["name", "card_number"];

interface data {
  gender: string;
  name: string;
  card_number: string;
}

type ArrayType<T> = {
  [Property in keyof T]: T[Property];
};
const Table = () => {
  const [res, setRes] = useState<ArrayType<data>[] | null>([
    { gender: "", name: "", card_number: "" },
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
        console.log("res:" + res);
        const arr = res.data.data.data.map((item: data): data => {
          return {
            gender: item.gender,
            name: item.name,
            card_number: item.card_number,
          };
        });
        setRes(arr);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(res);

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
        ? res.map((item: data) => (
            <div className={styles.containerContent}>
              <div className={styles.checkboxContent}>
                <input type="checkbox" />
              </div>
              <div className={styles.nik}>Test</div>

              <div className={styles.content}>
                {parseInt(item["gender"]) === 0 ? "Nam" : "Nữ"}
              </div>
              <div className={styles.content}>{item["name"]}</div>
              {/* 
              {datas.map((data) => (
                <div className={styles.content}>{item[data]}</div>
              ))} */}
            </div>
          ))
        : ""}
    </div>
  );
};

export default Table;
