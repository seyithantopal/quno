export type SwipeableType = {
  content: React.ReactNode;
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
  LOWEST_QUNOSCORE = 'Lowest Qunoscore',
}
