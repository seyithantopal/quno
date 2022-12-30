import { MAXIMUM_RATING, MINIMUM_RATING } from '../@contants';

export const currencyFormat = (num: number) => {
  return `€${num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
};

export const yearsOfExperienceToSince = (yearsOfExperience: number) => {
  const currentYear = new Date().getFullYear();
  return currentYear - yearsOfExperience;
};

export const calculatePercantageOfReviews = (averageRating: number) => {
  return Math.floor(
    ((averageRating - MINIMUM_RATING) / (MAXIMUM_RATING - MINIMUM_RATING)) *
      100,
  );
};
