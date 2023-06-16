import React, { useState } from "react";
import styles from "./scss/SignIn.module.scss";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import Banner from "../components/Banner";
import { FaEyeSlash, FaEye } from "react-icons/fa";

interface Inputs {
  newPassWord: string;
  confirmPassWord: string;
}

const NewPassWord = () => {
  const [show, setShow] = useState<boolean>(false);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);

  const handleShow = () => {
    setShow(!show);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {};

  return (
    <div className={styles.container}>
      <Banner />
      <p>Sign In</p>

      <form action="" className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <>
          <label htmlFor="passWord">New Password:</label>

          <div style={{ display: "flex", height: "46px" }}>
            <input
              type={show ? "text" : "password"}
              id="passWord"
              {...register("newPassWord", { required: true, minLength: 6 })}
            />
            <p className={styles.showPassword} onClick={handleShow}>
              {show ? <FaEye /> : <FaEyeSlash />}
            </p>
          </div>

          {errors.newPassWord?.type === "required" && (
            <li>PassWord is required</li>
          )}
          {errors.newPassWord?.type === "minLength" && (
            <li>Password mus be 6 characters long</li>
          )}
        </>

        <>
          <label htmlFor="passWord">Confirm Password:</label>
          <div style={{ display: "flex", height: "46px" }}>
            <input
              type={showConfirm ? "text" : "password"}
              id="passWord"
              {...register("confirmPassWord", { required: true })}
            />
            <p
              className={styles.showPassword}
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <FaEye /> : <FaEyeSlash />}
            </p>
          </div>
          {errors.confirmPassWord?.type === "required" && (
            <li>ConfirmPassWord is required</li>
          )}

          {/* {watch("confirmPassWord") !== "" &&
            watch("confirmPassWord") !== watch("newPassWord") && (
              <li>Confirm password should be match with password</li>
            )} */}

          {watch("confirmPassWord") !== watch("newPassWord") &&
          watch("confirmPassWord") ? (
            <li>Confirm password should be match with password</li>
          ) : null}
        </>

        <button type="submit">Confirm</button>

        <div className={styles.forgotPassword}>
          <Link to="/forgotPassword">Forgot Your Password?</Link>
        </div>
      </form>
    </div>
  );
};

export default NewPassWord;
