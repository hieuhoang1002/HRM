import React, { useState } from "react";
import styles from "../../scss/General/Profile.module.scss";
import ModalSignOut from "./ModalSignOut";
import { Link } from "react-router-dom";

type propProfile = {
  userId: number;
  userName: string;
  department: string;
  handleremoveShow: any;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Profile = (props: propProfile) => {
  const id = props.userId;

  const [showModalSignOut, setShowModalSignOut] = useState<boolean>(false);

  return (
    <div className={styles.x}>
      <div className={styles.container}>
        <div className={styles.userName}>
          <div className={styles.avatar}> {props.userName.charAt(0)}</div>

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

        <div className={styles.resetPassWord}>
          <Link to="settings/change-password">Reset Password</Link>
        </div>
      </div>
      <div className={styles.coating} onClick={props.handleremoveShow}></div>
    </div>
  );
};

export default Profile;
