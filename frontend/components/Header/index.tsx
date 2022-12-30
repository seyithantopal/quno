import { FC } from 'react';
import styles from '../../styles/modules/Header.module.scss';

const Header: FC = () => {
  return (
    <>
      <header className={styles.header}>
        <img className={styles.logo} src="/images/qunomedical-logo.svg" />
      </header>
    </>
  );
};

export default Header;
