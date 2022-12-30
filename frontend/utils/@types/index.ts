export type SwipeableType = {
  content: React.ReactNode;
};

export type KeysEnum<T> = { [P in keyof Required<T>]: P };

export const SortableKeys: KeysEnum<
  Pick<Doctor, 'qunoScoreNumber' | 'ratingsAverage' | 'basePrice'>
> = {
  qunoScoreNumber: 'qunoScoreNumber',
  ratingsAverage: 'ratingsAverage',
  basePrice: 'basePrice',
};

export type FilterType = {
  label: FILTER_ENUM;
  sortingColumn: keyof KeysEnum<typeof SortableKeys>;
  sortingDirection: 'asc' | 'desc';
};

export interface Doctor {
  name: string;
  speciality: string;
  slug: string;
  city: string;
  country: string;
  qunoScoreNumber: number;
  qunoScoreText: 'Excelent' | 'Very Good' | 'Good' | 'Regular' | 'Bad';
  ratingsAverage: number;
  reviews: number;
  treatmentsLastYear: number;
  yearsExperience: number;
  basePrice: number;
  avatarUrl: string;
  hospital: string;
}

export enum FILTER_ENUM {
  BEST_QUNOSCORE = 'Best Qunoscore',
  BEST_REVIEWS = 'Best Reviews',
  LOWEST_PRICE = 'Lowest Price',
}
