import React from "react";
import styles from "../../scss/pageManagement/Settings/ChangPassWord.module.scss";
import Pathpage from "../../../components/component/Pathpage";
import InputText from "../../../components/InputText";
import { useForm } from "react-hook-form";
import { IFormValues } from "../Employee/AddNewEmployee/interface";
import Button from "@mui/material/Button";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import axios from "axios";
import { API } from "../../../configAPI";

const pathPage = [{ name: "General", link: "/General" }, { name: "Settings" }];
const ChangePassWord = () => {
  const [showPass, setShowPass] = React.useState<boolean>(true);
  const [showConfirmPass, setShowConfirmPass] = React.useState<boolean>(true);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormValues>();
  const onSubmit = (data: any) => {};

  const handleNewPassWord = () => {
    axios({
      method: "POST",
      baseURL: API,
      url: "/change-password",
      headers: {
        Authorization: localStorage.getItem("CheckToken"),
      },
      data: {
        password: watch("newPass"),
        password_confirmation: watch("confirmPass"),
      },
    })
      .then((res) => console.log(res))
      .catch((err) => err);
  };

  return (
    <div className={styles.container}>
      <Pathpage pathPage={pathPage} />

      <div className={styles.title}>Settings</div>

      <div className={styles.content}>
        <span>Change Password</span>
        <hr />
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="newPass">New Password</label>
            <div>
              <input
                id="newPass"
                {...register("newPass", {
                  required: true,
                  // minLength: 8,
                  // maxLength: 16,
                  // pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                })}
                type={showPass ? "password" : "text"}
              />
              {watch("newPass") ? (
                <p
                  className={styles.showPassword}
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? <BsEye /> : <BsEyeSlash />}
                </p>
              ) : (
                ""
              )}
            </div>
            {errors.newPass?.type === "required" && (
              <li>Please enter password</li>
            )}
          </div>

          <div>
            <label htmlFor="confirmPass">Confirm Password</label>
            <div>
              <input
                id="confirmPass"
                {...register("confirmPass", {
                  required: true,
                  validate: (value) => value === watch("newPass"),
                })}
                type={showConfirmPass ? "password" : "text"}
              />
              {watch("confirmPass") ? (
                <p
                  className={styles.showPassword}
                  onClick={() => setShowConfirmPass(!showConfirmPass)}
                >
                  {showConfirmPass ? <BsEye /> : <BsEyeSlash />}
                </p>
              ) : (
                ""
              )}
            </div>
            {errors.confirmPass?.type === "required" && (
              <li>Please enter confirm password</li>
            )}
            {errors.confirmPass?.type === "validate" && (
              <li>The passwords do not match</li>
            )}
          </div>

          <Button
            type="submit"
            className={styles.btn}
            variant="contained"
            onClick={handleNewPassWord}
          >
            Confirm
          </Button>
        </form>
      </div>

      <div className={styles.footer}>Copyright © 2022. All Rights Reserved</div>
    </div>
  );
};

export default ChangePassWord;
