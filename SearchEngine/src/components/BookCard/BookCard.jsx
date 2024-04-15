import styles from "./BookCard.module.scss";
import noImageAvailable from "../../assets/noImageAvailable.jpg";

const BookCard = ({ data, index, showModal, setIndex }) => {
  const { title, author, image, releaseDate } = data;

  const handleClick = (index) => {
    showModal();
    setIndex(index);
  };

  return (
    <article
      className={styles.bookCard}
      onClick={() => {
        handleClick(index);
      }}
    >
      <div className={styles.bookCard__details}>
        <h4 className={styles.bookCard__title}> {title}</h4>
        <p className={styles.bookCard__author}>
          <span>Author:</span> {author || "Not available"}
        </p>
        <p>
          <span> Release Date:</span> {releaseDate || "Not available"}
        </p>
      </div>
      <img src={image || noImageAvailable} alt="book's image" />
    </article>
  );
};

export default BookCard;
