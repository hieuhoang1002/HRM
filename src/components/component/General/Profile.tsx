import React, { useState } from "react";
import styles from "../../scss/General/Profile.module.scss";
import ModalSignOut from "./ModalSignOut";

type propProfile = {
  userName: string;
  department: string;
  handleremoveShow: any;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Profile = (props: propProfile) => {
  const id = localStorage.getItem("id");

  const [showModalSignOut, setShowModalSignOut] = useState<boolean>(false);

  return (
    <div className={styles.x}>
      <div className={styles.container}>
        <div className={styles.userName}>
          <div className={styles.avatar}>HH</div>

          <div className={styles.name}>
            {id ? (
              <div>{props.userName}</div>
            ) : (
              <div>Please log in to view your profile.</div>
            )}
          </div>
        </div>

        <div className={styles.info}>
          <div className={styles.dev}>{props.department}</div>

          <div className={styles.id}>Staff ID: {id}</div>
        </div>

        <button onClick={() => setShowModalSignOut(true)}>Sign Out</button>
        {showModalSignOut && (
          <ModalSignOut
            handleShowModalSignOut={() => setShowModalSignOut(false)}
          />
        )}
      </div>
      <div className={styles.coating} onClick={props.handleremoveShow}></div>
    </div>
  );
};

export default Profile;
