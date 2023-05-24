import React, { Suspense, useState } from "react";
import styles from "../scss/SignIn.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import Banner from "./Banner";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import axios from "axios";
import { API } from "../../configAPI";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";

// require("dotenv").config({ path: ".env" });

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

  const dispatch = useDispatch();
  // console.log(localStorage.getItem("token"));

  const handleLogin = () => {
    axios({
      method: "post",
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

        var userName = watch("username");

        axios({
          method: "get",
          baseURL: API,
          url: "/user",
          headers: {
            Authorization: "Bearer " + res.data.data.token,
          },
          data: {
            username: userName,
          },
        })
          .then((data) => {
            const infoUser = data.data.data.data.find((user: any) => {
              return user.username === userName;
            });
            dispatch({
              type: "SIGNIN",
              payload: infoUser.id,
            });
          })
          .catch(() => {});
      })
      .catch((err) => toast("Đăng nhập thất bại"));
  };

  return (
    <div className={styles.container}>
      <ToastContainer />

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
              {...register("password", { required: true, minLength: 6 })}
            />
            <p className={styles.showPassword} onClick={handleShowPassWord}>
              {show ? <FaEye /> : <FaEyeSlash />}
            </p>
          </div>

          {errors.password?.type === "required" && (
            <li>PassWord is required</li>
          )}
          {errors.password?.type === "minLength" && (
            <li>Password mus be 6 characters long</li>
          )}
        </>

        <>
          <label htmlFor="company_id">Factory:</label>
          <select id="" {...register("company_id", { required: true })}>
            <option disabled selected hidden value="">
              Select Factory
            </option>
            <option value="2">DMF</option>
            <option value="1">SBM</option>
          </select>

          {errors.company_id?.type === "required" && (
            <li>Factory is required</li>
          )}
        </>

        <Suspense fallback={<Loading />}>
          <button type="submit" onClick={handleLogin}>
            Sign In
          </button>
        </Suspense>

        <div className={styles.forgotPassword}>
          <Link to="/forgotPassword">Forgot Your Password?</Link>
        </div>
      </form>

      {/* <Link to="/newPassWord">
        <button>NewPassWord</button>
      </Link> */}

      {/* <Suspense fallback={<Loading />}>
        <Link to="/newPassWord">
          <button>NewPassWord</button>
        </Link>
      </Suspense> */}
    </div>
  );
};
const Loading = () => {
  return <h2 style={{ background: "red" }}>abcd</h2>;
};

export default SignIn;
