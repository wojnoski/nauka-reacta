import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';

const List = () => {
  const columns = useSelector(state => state.columns);

  
  return (
    <div className={styles.List}>
      <header className={styles.header}>
        <h1 className={styles.title}>Things to do <span>soon!</span></h1>
      </header>
      <p className={styles.description}>Interesting things I want to check out</p>
      <section className={styles.columns}>
        {columns.map(column => <Column key={column.id} {...column} />)}
      </section>
      <ColumnForm />
    </div>
  );
};

export default List;