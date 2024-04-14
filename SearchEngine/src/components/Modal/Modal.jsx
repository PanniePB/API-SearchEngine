import { useEffect, useState } from "react";
import styles from "./Modal.module.scss";
// import noImageAvailable from "../../assets/NoImageAvailable.png";

const Modal = ({ toggleShowModal, item, modalIsShown }) => {
  const { title, author, description, image, language, releaseDate } = item;

  useEffect(() => {
    if (!modalIsShown) {
      return;
    }
    const escapeListen = (e) => {
      if (e.key === "Escape") {
        toggleShowModal();
      }
    };
    window.addEventListener("keydown", escapeListen);
    return () => window.removeEventListener("keydown", escapeListen);
  }, [modalIsShown]);

  return (
    <>
      <div className={styles.overlay} onClick={toggleShowModal}></div>
      <article className={styles.card}>
        <section className={styles.card__top}>
          <div className={styles.card__top__details}>
            <h3 className={styles.card__top__title}> {title}</h3>
            <p className={styles.card__top__author}>
              <span>Author:</span> {author || "Not available"}
            </p>
            <p>
              <span> Release Date:</span> {releaseDate || "Not available"}
            </p>
            <p>
              <span> Language:</span> {language}
            </p>
          </div>
          {/* <img
            className={styles.card__image}
            src={image || noImageAvailable}
            alt="book's image"
          /> */}
        </section>
        <p className={styles.card__desc}>
          <span className={styles.card__desc__label}> Description:</span>{" "}
          {description || "No description is available for this title"}
        </p>
        {/* <section className={styles.card__desc}>{description}</section> */}
      </article>
    </>
  );
};

export default Modal;
