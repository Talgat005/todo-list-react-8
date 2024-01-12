import React, { useState } from "react";
import styles from "./TodoItem.module.css";
import { Modal } from "./Modal";

export const TodoItem = ({ id, text, onDelete }) => {
  const [showModal, setShowModal] = useState(false);

  function handleDelete() {
    onDelete(id);
  }

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }
  return (
    <div className={styles.todoItem}>
      <span className={styles.todoText}>{text}</span>

      <button className={styles.deleteButton} onClick={openModal}>
        delete
      </button>

      <Modal
        visible={showModal}
        onClose={closeModal}
        children={
          <>
            <h2>Delete Todo</h2>
            <p>Are you sure you want to delete this todo?</p>
            <button onClick={handleDelete}>Yes</button>
            <button onClick={closeModal}>No</button>
          </>
        }
      />
    </div>
  );
};
