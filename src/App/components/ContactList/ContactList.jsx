import React from "react";
import styles from "./ContactList.module.css";

function ContactList({ data, deleteContact }) {
  const parsData = data.map((el) => {
    return (
      <li className={styles.contactListItem} key={el.id}>
        {el.name} : {el.number}{" "}
        <button id={el.id} onClick={deleteContact}>
          delete
        </button>
      </li>
    );
  });
  return <ul className={styles.contactList}>{parsData}</ul>;
}

export default ContactList;
