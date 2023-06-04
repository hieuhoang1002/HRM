import React from "react";
import styles from "../../../scss/pageManagement/Employee/AddNewEmployee/Add.module.scss";

type propsType = {
  onSubmit: any;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Add = (props: propsType) => {
  return (
    <div>
      <form action="" onSubmit={props.onSubmit}>
        <button className={styles.container} type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Add;
