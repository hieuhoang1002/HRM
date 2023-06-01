import React, { ChangeEvent } from "react";
import styles from "./scss/InputText.module.scss";
import { Path, UseFormRegister } from "react-hook-form";
import { IFormValues } from "../pages/pageManagement/Employee/AddNewEmployee/interface";

// type propsInputText = {
//   type: string;
//   value: string | number;
//   id: string;
//   onChange: (event: ChangeEvent<HTMLInputElement>) => void;
// } & React.DetailedHTMLProps<
//   React.HTMLAttributes<HTMLDivElement>,
//   HTMLDivElement
// >;

type InputProps = {
  type: string;
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
};
const InputText = ({ type, label, register, required }: InputProps) => {
  return (
    <div className={styles.container}>
      {/* <label htmlFor={label}>{label}</label> */}
      <input type={type} id={label} {...register(label, { required })} />
    </div>
  );
};

export default InputText;
