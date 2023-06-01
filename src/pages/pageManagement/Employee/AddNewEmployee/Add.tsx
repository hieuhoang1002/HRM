import React from "react";
import styles from "../../../scss/pageManagement/Employee/AddNewEmployee/Add.module.scss";

type propsType = {
  type: any;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Add = (props: propsType) => {
  return (
    <div>
      <button className={styles.container}>Add</button>
    </div>
  );
};

export default Add;
