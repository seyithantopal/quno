import Head from 'next/head';
import { FC, useState } from 'react';
import styles from '../../styles/Filter.module.css';
import { adelleSansFont, nettoFont } from '../../utils/@fonts';

interface FilterProps {
  label: string;
}

const Filter: FC<FilterProps> = ({ label }) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <div className={styles.buttonContainer}>
        <button
          className={`${isActive ? styles.buttonActive : styles.button}`}
          onClick={handleClick}
        >
          {label}
        </button>
      </div>
    </>
  );
};

export default Filter;
