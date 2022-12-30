import { FC, useState } from 'react';
import { FILTER_ENUM } from '../../utils/@types';
import styles from '../../styles/modules/Filter.module.scss';

interface FilterProps {
  labels: FILTER_ENUM[];
  handleChangeFilter: (filter: FILTER_ENUM | null) => void;
}

const Filter: FC<FilterProps> = ({ labels, handleChangeFilter }) => {
  const [filterLabel, setFilterLabel] = useState<FILTER_ENUM | null>(null);

  const handleClick = (label: FILTER_ENUM) => {
    handleChangeFilter(filterLabel === label ? null : label);
    setFilterLabel(filterLabel === label ? null : label);
  };

  return (
    <>
      <div className={styles.buttonContainer}>
        {labels.map((label, index) => (
          <button
            key={index}
            className={`${
              filterLabel === label
                ? styles.filterButtonPrimary
                : styles.filterButtonSecondary
            }`}
            onClick={() => handleClick(label)}
          >
            {label}
          </button>
        ))}
      </div>
    </>
  );
};

export default Filter;
