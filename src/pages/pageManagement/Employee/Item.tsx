import React, { useState } from "react";
import styles from "../../scss/pageManagement/Employee/Item.module.scss";
import { AiOutlineDelete } from "react-icons/ai";
import Add from "../../../img/General/Employee/add.png";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const Item = ({ handleDeleteChange, activeDelete }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleModalDelete = () => {
    setShowModal(!showModal);
  };
  const handleDeleteShowModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.item}>
      <Link to="create-or-update">
        <div className={styles.add}>
          <img src={Add} alt="" />
          <p>Add</p>
        </div>
      </Link>

      {activeDelete ? (
        <div>
          <div onClick={handleModalDelete} className={styles.activeDelete}>
            <AiOutlineDelete className={styles.icon} />
            <p>Delete</p>
          </div>
          {showModal && (
            <ModalDelete
              handleDeleteChange={handleDeleteChange}
              handleDeleteShowModal={handleDeleteShowModal}
            />
          )}
        </div>
      ) : (
        <div className={styles.delete}>
          <AiOutlineDelete className={styles.icon} />
          <p>Delete</p>
        </div>
      )}
    </div>
  );
};
function ModalDelete({ handleDeleteChange, handleDeleteShowModal }) {
  const handleDeleteChangeAndhandleDeleteShowModal = () => {
    handleDeleteChange();
    handleDeleteShowModal();
  };
  return (
    <div className={styles.modalDelete}>
      <div className={styles.modalDelete_Container}>
        <div className={styles.modalDelete_header}>
          <div className={styles.modalDelete_title}>Delete</div>

          <div
            className={styles.modalDelete_item}
            onClick={handleDeleteShowModal}
          >
            <IoClose className={styles.modalDelete_icon} />
          </div>
        </div>

        <p>Are you sure you want to delete?</p>

        <div className={styles.modalDelete_btn}>
          <button onClick={handleDeleteShowModal}>No</button>
          <button onClick={handleDeleteChangeAndhandleDeleteShowModal}>
            Yes
          </button>
        </div>
      </div>
      <div
        className={styles.modalDelete_coating}
        onClick={handleDeleteShowModal}
      ></div>
    </div>
  );
}

export default Item;
