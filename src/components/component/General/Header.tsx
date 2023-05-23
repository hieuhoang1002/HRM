import React, { useEffect, useState } from "react";
import styles from "../../scss/General/Header.module.scss";
import logo from "../../../img/logoGeneral.png";
import intlImg from "../../../img/intl.png";
import { IoIosArrowDown } from "react-icons/io";
import ModalSignOut from "./ModalSignOut";

const Header = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleShow = () => {
    setShowModal(!showModal);
  };
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.logo}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.textName}>HR Managenment System</div>
      </div>

      <div>
        <div className="dropdown-center">
          <button
            // className="btn btn-secondary dropdown-toggle"
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
          HH
        </div>
        {showModal && <ModalSignOut />}
      </div>
    </div>
  );
};

export default Header;
