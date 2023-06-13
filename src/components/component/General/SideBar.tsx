import React from "react";
import styles from "../../scss/General/SideBar.module.scss";
import { IMG } from "../../../img/General/ConfigImg";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className={styles.container}>
      <p className={styles.general}>General</p>

      <NavLink
        to="attendance"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? styles.active : ""
        }
      >
        <div className={styles.item}>
          <div className={styles.icon}>
            <img src={IMG.Icon1} alt="" className={styles.img} />
          </div>
          <div className={styles.title}>
            <p>Attendance Management</p>
          </div>
        </div>
      </NavLink>

      <NavLink
        to="leave"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? styles.active : ""
        }
      >
        <div className={styles.item}>
          <div className={styles.icon}>
            <img src={IMG.Icon2} alt="" className={styles.img} />
          </div>
          <div className={styles.title}>
            <p>Leave Management</p>
          </div>
        </div>
      </NavLink>

      <NavLink
        to="payroll"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? styles.active : ""
        }
      >
        <div className={styles.item}>
          <div className={styles.icon}>
            <img src={IMG.Icon3} alt="" className={styles.img} />
          </div>
          <div className={styles.title}>
            <p>Payroll Management</p>
          </div>
        </div>
      </NavLink>

      <NavLink
        to="employee"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? styles.active : ""
        }
      >
        <div className={styles.item}>
          <div className={styles.icon}>
            <img src={IMG.Icon4} alt="" className={styles.img} />
          </div>
          <div className={styles.title}>
            <p>Employee Management</p>
          </div>
        </div>
      </NavLink>

      <NavLink
        to="user"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? styles.active : ""
        }
      >
        <div className={styles.item}>
          <div className={styles.icon}>
            <img src={IMG.Icon5} alt="" className={styles.img} />
          </div>
          <div className={styles.title}>
            <p>User Management</p>
          </div>
        </div>
      </NavLink>

      <NavLink
        to="master"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? styles.active : ""
        }
      >
        <div className={styles.item}>
          <div className={styles.icon}>
            <img src={IMG.Icon6} alt="" className={styles.img} />
          </div>
          <div className={styles.title}>
            <p>Master Management</p>
          </div>
        </div>
      </NavLink>

      {/* ================================= */}
      <p className={styles.advance}>Advance</p>

      <NavLink
        to="globalsettings"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? styles.active : ""
        }
      >
        <div className={styles.item}>
          <div className={styles.icon}>
            <img src={IMG.Icon7} alt="" className={styles.img} />
          </div>
          <div className={styles.title}>
            <p>Global Settings</p>
          </div>
        </div>
      </NavLink>

      <NavLink
        to="settings"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? styles.active : ""
        }
      >
        <div className={styles.item}>
          <div className={styles.icon}>
            {/* <img src={IMG.Icon7} alt="" className={styles.img} /> */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.img}
            >
              <path
                d="M18.9596 14.5835C18.9596 14.9252 18.6763 15.2085 18.3346 15.2085H12.5013V15.4168C12.5013 16.6668 11.7513 17.0835 10.8346 17.0835H5.83464C4.91797 17.0835 4.16797 16.6668 4.16797 15.4168V15.2085H1.66797C1.3263 15.2085 1.04297 14.9252 1.04297 14.5835C1.04297 14.2418 1.3263 13.9585 1.66797 13.9585H4.16797V13.7502C4.16797 12.5002 4.91797 12.0835 5.83464 12.0835H10.8346C11.7513 12.0835 12.5013 12.5002 12.5013 13.7502V13.9585H18.3346C18.6763 13.9585 18.9596 14.2418 18.9596 14.5835Z"
                fill="#006ADC"
              ></path>
              <path
                opacity="0.4"
                d="M18.9577 5.4165C18.9577 5.75817 18.6743 6.0415 18.3327 6.0415H15.8327V6.24984C15.8327 7.49984 15.0827 7.9165 14.166 7.9165H9.16602C8.24935 7.9165 7.49935 7.49984 7.49935 6.24984V6.0415H1.66602C1.32435 6.0415 1.04102 5.75817 1.04102 5.4165C1.04102 5.07484 1.32435 4.7915 1.66602 4.7915H7.49935V4.58317C7.49935 3.33317 8.24935 2.9165 9.16602 2.9165H14.166C15.0827 2.9165 15.8327 3.33317 15.8327 4.58317V4.7915H18.3327C18.6743 4.7915 18.9577 5.07484 18.9577 5.4165Z"
                fill="#006ADC"
              ></path>
            </svg>
          </div>
          <div className={styles.title}>
            <p>Settings</p>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default SideBar;
