import React, { ChangeEvent } from "react";
import styles from "./scss/InputText.module.scss";
import { Path, UseFormRegister } from "react-hook-form";
import { IFormValues } from "../pages/pageManagement/Employee/AddNewEmployee/interface";

type InputProps = {
  value: string;
  placeholder: string;
  type: string;
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
};
const InputText = ({
  value,
  placeholder,
  type,
  label,
  register,
  required,
}: InputProps) => {
  return (
    <div className={styles.container}>
      {/* <label htmlFor={label}>{label}</label> */}
      <input
        defaultValue={value}
        type={type}
        id={label}
        {...register(label, { required })}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputText;
