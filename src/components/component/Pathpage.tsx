import React from "react";
import styles from "../scss/PathPage.module.scss";
import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Pathpage = ({ pathPage }) => {
  return (
    <div className={styles.container}>
      {pathPage.map((item: any, i: number) => (
        <div key={i}>
          {item.link ? (
            <div>
              <Link to={item.link} className={styles.link}>
                {item.name}
              </Link>
              <BsChevronRight className={styles.icon} />
            </div>
          ) : (
            <p>{item.name}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Pathpage;
