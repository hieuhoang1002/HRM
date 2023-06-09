import React, { useEffect, useState } from "react";
import styles from "../../scss/General/Header.module.scss";
import logo from "../../../img/logoGeneral.png";
import intlImg from "../../../img/intl.png";
import { IoIosArrowDown } from "react-icons/io";
import Profile from "./Profile";
import axios from "axios";
import { API } from "../../../configAPI";

const Header = () => {
  const id = localStorage.getItem("id");
  // console.log(id);
  // const Token = localStorage.getItem("CheckToken");
  // console.log(Token);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  const [department, setDepartment] = useState<string>("");

  useEffect(() => {
    axios({
      method: "get",
      baseURL: API,
      url: `/user/${id}`,
      headers: {
        Authorization: localStorage.getItem("CheckToken"),
      },
    })
      .then((res) => {
        setUserName(res.data.data.username);
        setDepartment(res.data.data.department.name);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleShow = () => {
    setShowModal(true);
  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.logo}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.textName}>HR Management System</div>
      </div>

      <div>
        <div className="dropdown-center">
          <button
            className={styles.btnDropdown}
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img src={intlImg} alt="" />
            <span>EN</span>
            <IoIosArrowDown className={styles.icon} />
          </button>
          <ul className="dropdown-menu">
            <li className="dropdown-item">
              <img src={intlImg} alt="" />
              <span>EN</span>
            </li>

            <li className="dropdown-item">
              <img src={intlImg} alt="" />
              <span>VI</span>
            </li>
          </ul>
        </div>

        <div className={styles.avatar} onClick={handleShow}>
          {userName.charAt(0)}
        </div>
        {showModal && (
          <Profile
            userName={userName}
            department={department}
            handleremoveShow={() => setShowModal(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
