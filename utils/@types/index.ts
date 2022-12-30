export type SwipeableType = {
  content: React.ReactNode;
};

export interface Doctor {
  name: string;
  slug: string;
  city: string;
  country: string;
  qunoScoreNumber: number;
  qunoScoreText: 'Excelent' | 'Very Good' | 'Good' | 'Regular' | 'Bad';
  ratingsAverage: number;
  treatmentsLastYear: number;
  yearsExperience: number;
  basePrice: number;
  avatarUrl: string;
}
