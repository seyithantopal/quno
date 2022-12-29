import { FC, useState } from 'react';
import styles from '../../styles/modules/Filter.module.scss';

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
          className={`${
            isActive ? styles.filterButtonPrimary : styles.filterButtonSecondary
          }`}
          onClick={handleClick}
        >
          {label}
        </button>
      </div>
    </>
  );
};

export default Filter;
