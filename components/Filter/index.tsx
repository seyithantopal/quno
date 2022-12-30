import { FC, useState } from 'react';
import { FilterType, FILTER_ENUM } from '../../utils/@types';
import styles from '../../styles/modules/Filter.module.scss';

interface FilterProps {
  handleChangeFilter: (filter: FilterType | null) => void;
  filters: FilterType[];
}

const Filter: FC<FilterProps> = ({ filters, handleChangeFilter }) => {
  const [filterLabel, setFilterLabel] = useState<FILTER_ENUM | null>(null);

  const handleClick = (filter: FilterType) => {
    handleChangeFilter(filterLabel === filter.label ? null : filter);
    setFilterLabel(filterLabel === filter.label ? null : filter.label);
  };

  return (
    <>
      <div className={styles.buttonContainer}>
        {filters.map((filter, index) => (
          <button
            key={index}
            className={`${
              filterLabel === filter.label
                ? styles.filterButtonPrimary
                : styles.filterButtonSecondary
            }`}
            onClick={() => handleClick(filter)}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </>
  );
};

export default Filter;
