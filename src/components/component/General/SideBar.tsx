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
    </div>
  );
};

export default SideBar;
