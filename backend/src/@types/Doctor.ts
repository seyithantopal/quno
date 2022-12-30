export interface Doctor {
	name: string;
	slug: string;
	speciality: string;
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
