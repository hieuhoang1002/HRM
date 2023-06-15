import React, { useState } from "react";
import styles from "../scss/SignIn.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import Banner from "./Banner";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import axios from "axios";
import { API } from "../../configAPI";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, FormControl, MenuItem, Select } from "@mui/material";

interface Inputs {
  username: string;
  password: string;
  company_id: number;
}

const SignIn = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {};

  const handleShowPassWord = () => {
    setShow(!show);
  };

  const handleLogin = () => {
    axios({
      method: "POST",
      baseURL: API,
      url: "/login",
      data: {
        username: watch("username"),
        password: watch("password"),
        company_id: watch("company_id"),
      },
    })
      .then((res) => {
        localStorage.setItem("CheckToken", "Bearer " + res.data.data.token);
        toast("Đăng nhập thành công");
        navigate("/General");
      })
      .catch((err) => toast("Đăng nhập thất bại"));
  };

  return (
    <div className={styles.container}>
      <Banner />
      <p>Sign In</p>

      <form action="" className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            {...register("username", { required: true })}
          />

          {errors.username?.type === "required" && <li>Name is required</li>}
        </>

        <>
          <label htmlFor="password">Password:</label>

          <div style={{ display: "flex", height: "46px" }}>
            <input
              type={show ? "text" : "password"}
              id="password"
              {...register("password", {
                required: true,
                minLength: 8,
                maxLength: 16,
                // pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
              })}
            />
            {watch("password") ? (
              <p className={styles.showPassword} onClick={handleShowPassWord}>
                {show ? <FaEye /> : <FaEyeSlash />}
              </p>
            ) : (
              ""
            )}
          </div>

          {errors.password?.type === "required" && (
            <li>PassWord is required</li>
          )}
          {errors.password?.type <= "minLength" &&
            errors.password?.type >= "maxLength" && (
              <li>Password from 8 to 16 characters</li>
            )}
        </>
        <>
          <label htmlFor="company_id">Factory:</label>
          <FormControl className={styles.formControl}>
            <Select
              className={styles.select}
              {...register("company_id", { required: true })}
            >
              <MenuItem className={styles.menuItem} value={1}>
                SBM
              </MenuItem>
              <MenuItem className={styles.menuItem} value={2}>
                DMF
              </MenuItem>
            </Select>
          </FormControl>
          {errors.company_id?.type === "required" && (
            <li>Factory is required</li>
          )}
        </>

        <Button
          type="submit"
          onClick={handleLogin}
          variant="contained"
          className={styles.button}
        >
          Sign In
        </Button>

        <div className={styles.forgotPassword}>
          <Link to="/forgotPassword">Forgot Your Password?</Link>
        </div>
      </form>

      {/* <Link to="/newPassWord">
        <button>NewPassWord</button>
      </Link> */}
    </div>
  );
};

export default SignIn;
