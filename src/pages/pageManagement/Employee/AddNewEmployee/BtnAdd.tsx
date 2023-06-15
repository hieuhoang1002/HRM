import React from "react";
import styles from "../../../scss/pageManagement/Employee/AddNewEmployee/BtnAdd.module.scss";
import { Button } from "@mui/material";

type propsType = {
  submit: "submit" | "reset" | "button" | undefined;
  handleSubmitBtn: any;
  name: string;
  styles: string;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const BtnAdd = (props: propsType) => {
  return (
    <div className={styles.container}>
      <Button
        type={props.submit}
        onClick={props.handleSubmitBtn}
        className={
          props.styles === "stylesRemoveAdd" &&
          (props.name === "Add" || props.name === " Save Change")
            ? styles.stylesRemoveadd
            : (props.name === "Save Change" && props.styles === "stylesAdd") ||
              (props.styles === "stylesAdd" && props.name === "Add")
            ? styles.stylesAdd
            : styles.stylesRemoveadd
        }
      >
        {props.name}
      </Button>
    </div>
  );
};

export default BtnAdd;
