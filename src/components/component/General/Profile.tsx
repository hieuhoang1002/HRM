import React from "react";
import styles from "../../scss/General/Profile.module.scss";

type propProfile = {
  userName: string;
  department: string;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Profile = (props: propProfile) => {
  const id = localStorage.getItem("id");

  return (
    <div className={styles.container}>
      <div className={styles.userName}>
        <div className={styles.avatar}>HH</div>
        <div className={styles.name}>
          {id ? (
            <p>{props.userName}</p>
          ) : (
            <p>Please log in to view your profile.</p>
          )}
        </div>
      </div>

      <div className={styles.info}>
        <div className={styles.dev}>{props.department}</div>
        <div className={styles.id}>Staff ID: {id}</div>
      </div>

      <button>Sign Out</button>
    </div>
  );
};

export default Profile;
