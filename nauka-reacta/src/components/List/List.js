import styles from './List.module.scss';

const List = () => {
  return (
    <div className={styles.List}>
      <header className={styles.header}>
        <h1 className={styles.title}>Things to do <span>soon</span></h1>
        <p className={styles.description}>Interesting things I want to check out</p>
      </header>
      <section className={styles.columns}>
        <article>
          <h2>Books</h2>
        </article>
        <article>
          <h2>Movies</h2>
        </article>
        <article>
          <h2>Games</h2>
        </article>
      </section>
    </div>
  );
};

export default List;