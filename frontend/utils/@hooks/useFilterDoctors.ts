import { useEffect, useState } from 'react';
import { Doctor, FilterType } from '../@types';

export const useFilterDoctors = (rawData: Doctor[]) => {
  const [sortedDoctors, setSortedDoctors] = useState(rawData);
  const [filter, setFilter] = useState<FilterType | null>(null);
  const handleChangeFilter = (filter: FilterType | null) => {
    setFilter(filter);
  };

  const sortData = (rawData: Doctor[]) => {
    const temp = [...rawData];
    if (filter !== null) {
      const { sortingColumn, sortingDirection } = filter;

      return temp.sort((a: Doctor, b: Doctor) => {
        const aValue = a[sortingColumn];
        const bValue = b[sortingColumn];

        if (sortingDirection === 'asc') {
          return aValue < bValue ? -1 : 1;
        } else {
          return aValue < bValue ? 1 : -1;
        }
      });
    } else {
      return rawData;
    }
  };

  useEffect(() => {
    setSortedDoctors(() => {
      const temp = [...rawData];
      return sortData(temp);
    });
  }, [filter]);

  return {
    sortedDoctors,
    handleChangeFilter,
  };
};
