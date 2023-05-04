import styles from './SearchForm.module.scss';

const SearchForm = () => {
  return (
      <form className={styles.searchForm}>
          <input className={styles.input} />
          <button className={styles.button}>Search</button>
      </form>
  );
};

export default SearchForm;