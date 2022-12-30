import { useEffect, useState } from 'react';
import { Doctor, FILTER_ENUM } from '../@types';

export const useFilterDoctors = (rawData: Doctor[]) => {
  const [sortedDoctors, setSortedDoctors] = useState(rawData);
  const [filter, setFilter] = useState<FILTER_ENUM | null>(null);
  const handleChangeFilter = (filter: FILTER_ENUM | null) => {
    setFilter(filter);
  };

  const sortData = (rawData: Doctor[]) => {
    if (filter === FILTER_ENUM.BEST_QUNOSCORE) {
      return rawData.sort((a, b) => b.qunoScoreNumber - a.qunoScoreNumber);
    } else if (filter === FILTER_ENUM.LOWEST_QUNOSCORE) {
      return rawData.sort((a, b) => a.qunoScoreNumber - b.qunoScoreNumber);
    } else if (filter === FILTER_ENUM.BEST_REVIEWS) {
      return rawData.sort((a, b) => b.ratingsAverage - a.ratingsAverage);
    } else {
      return rawData;
    }
  };

  useEffect(() => {
    setSortedDoctors((prevState) => {
      const temp = [...prevState];
      sortData(temp);
      return temp;
    });
  }, [filter]);

  return {
    sortedDoctors,
    handleChangeFilter,
  };
};
