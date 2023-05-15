import styles from './List.module.scss';
import Column from '../Column/Column';
import { useState } from 'react';
import shortid from 'shortid';
import ColumnForm from '../ColumnForm/ColumnForm';

const List = () => {
  const [columns, setColumns] = useState([
    {
      id: 1, 
      title: 'Books', 
      icon: 'book',
      cards: [
        { id: 1, title: 'Wyznania Gejszy'},
        { id: 2, title: 'Ogniem i mieczem'}
      ]
    },
    {
      id: 2,
      title: 'Movies', 
      icon: 'film',
      cards: [
        { id: 1, title: 'Powrót do przyszłości'},
        { id: 2, title: 'Kiler'}
      ]
    },
    {
      id: 3, 
      title: 'Games', 
      icon: 'gamepad',
      cards: [
        { id: 1, title: 'Wiedźmin'},
        { id: 2, title: 'Red Dead Redemption'}
      ]
    }
  ]);
  const addColumn = newColumn => {
    setColumns([...columns, {id: shortid(), title: newColumn.title, icon: newColumn.icon, cards: [] }]);
  };
  
  return (
    <div className={styles.List}>
      <header className={styles.header}>
        <h1 className={styles.title}>Things to do <span>soon!</span></h1>
      </header>
      <p className={styles.description}>Interesting things I want to check out</p>
      <section className={styles.columns}>
        {columns.map(column => <Column key={column.id} title={column.title} icon={column.icon} cards={column.cards} />)}
      </section>
      <ColumnForm action={addColumn} />
    </div>
  );
};

export default List;