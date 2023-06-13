import React from "react";
import styles from "../../../scss/pageManagement/Employee/AddNewEmployee/BtnAdd.module.scss";
import { Link } from "react-router-dom";

type propsType = {
  submit: "submit" | "reset" | "button" | undefined;
  handleSubmitBtn: any;
  name: string;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const BtnAdd = (props: propsType) => {
  return (
    <div className={styles.container}>
      {/* <Link to="/General/employee"> */}
      <button
        type={props.submit}
        onClick={props.handleSubmitBtn}
        className={props.name === "Add" ? styles.add : styles.saveChange}
      >
        {props.name}
      </button>
      {/* </Link> */}
    </div>
  );
};

export default BtnAdd;
