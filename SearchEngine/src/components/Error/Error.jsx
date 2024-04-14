import styles from "./Error.module.scss";

const Error = ({ searchTerm }) => {
  return (
    <div className={styles.error}>
      {searchTerm && (
        <p>
          No results were found for "<strong>{searchTerm}</strong>" <br></br>
          Please try different keywords.
        </p>
      )}
      {!searchTerm && <p>Please enter a search query.</p>}
    </div>
  );
};

export default Error;
