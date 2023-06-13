import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API } from "../../../configAPI";
import styles from "../../scss/General/ModalSignOut.module.scss";
import { IoClose } from "react-icons/io5";

type propModaleSignOut = {
  handleShowModalSignOut: any;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const ModalSignOut = (props: propModaleSignOut) => {
  // const id = localStorage.getItem("id");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    axios({
      method: "post",
      baseURL: API,
      url: "/logout",
      data: {},
      headers: {
        Authorization: "Bearer" + localStorage.getItem("CheckToken"),
      },
    })
      .then((res) => {
        dispatch({
          type: "SIGNOUT",
          payload: "",
        });
        navigate("/");
        console.log(res);
      })
      .catch((err) => err);
  };
  return (
    <div className={styles.x}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>Do you wish sign out?</div>
          <div className={styles.item} onClick={props.handleShowModalSignOut}>
            <IoClose className={styles.icon} />
          </div>
        </div>

        <div className={styles.btn}>
          <button onClick={props.handleShowModalSignOut}>No</button>
          <button onClick={handleSignOut}>Yes</button>
        </div>
      </div>
      <div
        className={styles.coating}
        onClick={props.handleShowModalSignOut}
      ></div>
    </div>
  );
};

export default ModalSignOut;
