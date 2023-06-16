import React from "react";
import Banner from "../components/Banner";
import styles from "./scss/ForgotPassword.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import { API } from "../API/configAPI";

interface Inputs {
  email: string;
}
const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {};

  const email = watch("email");

  const handleForgotPassWord = () => {
    axios({
      method: "post",
      baseURL: API,
      url: "/forgot-password",
      data: {
        email: email,
      },
    })
      .then((res) => {})
      .catch((err) => err);
  };

  return (
    <div className={styles.container}>
      <Banner />
      <p className={styles.title}>Forgot password</p>

      <form action="" className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <>
          <label htmlFor="email">Your work email:</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />

          {errors.email?.type === "required" && <li>email is required</li>}
          {errors.email?.type === "pattern" && <li>Invalid Email Address</li>}
        </>

        <button type="submit" onClick={handleForgotPassWord}>
          Confirm & Send OTP
        </button>

        <div className={styles.backSignIn}>
          <Link to="/">Back to Sign In</Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
