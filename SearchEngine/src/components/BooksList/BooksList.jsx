import BookCard from "../BookCard/BookCard";
import Error from "../Error/Error";
import styles from "./BooksList.module.scss";
import { fetchBook } from "../services/fetchBook";
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";


const BooksList = ({ searchTerm, emptySearch }) => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [modalIndex, setModalIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!searchTerm) {
      return;
    }

    setBooks([]);
    setError(null);
    setLoading(true);

    fetchBook(searchTerm)
      .then((books) => {
        setBooks(books);
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => setLoading(false));
  }, [searchTerm]);

  const toggleShowModal = () => {
    setShowModal(!showModal);
  };

  const changeModalIndex = (index) => {
    setModalIndex(index);
  };

  return (
    <div className={styles.booksList}>
      {emptySearch && <Error searchTerm={null} />}

      {/* {loading && <Loading />} */}
      {!loading && !emptySearch && error && <Error searchTerm={searchTerm} />}

      {!emptySearch &&
        books.length > 0 &&
        books.map((book, index) => (
          <BookCard
            key={index}
            index={index}
            data={book}
            showModal={toggleShowModal}
            setIndex={changeModalIndex}
          />
        ))}

      {showModal && (
        <Modal
          toggleShowModal={toggleShowModal}
          modalIsShown={showModal}
          item={{ ...books[modalIndex] }}
        />
      )}
    </div>
  );
};

export default BooksList;