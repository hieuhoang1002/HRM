import React from "react";
import styles from "../../scss/pageManagement/Employee/Item.module.scss";
import { AiOutlineDelete } from "react-icons/ai";
import Add from "../../../img/General/Employee/add.png";
import { Link } from "react-router-dom";

const Item = () => {
  return (
    <div className={styles.item}>
      <Link to="create-or-update">
        <div className={styles.add}>
          <img src={Add} alt="" />

          <p>Add</p>
        </div>
      </Link>

      <div className={styles.delete}>
        <AiOutlineDelete className={styles.icon} />
        <p>Delete</p>
      </div>
    </div>
  );
};

export default Item;
