import React from 'react';
import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Что-то пошло не так
      </h1>
      <p>Страница не найдена</p>
    </div>
  );
};

export default NotFoundBlock;
