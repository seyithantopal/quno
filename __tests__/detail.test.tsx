import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DetailCard from '../components/DetailCard';
import { Doctor } from '../utils/@types';
import { calculatePercantageOfReviews } from '../utils/@helpers/formatter';

describe('Doctor Detail Page', () => {
  const doctor: Doctor = {
    name: 'Dr. Lay Raphael',
    speciality: 'Hair Transplant',
    city: 'Citampian',
    country: 'Indonesia',
    qunoScoreNumber: 8.5,
    ratingsAverage: 4.8,
    reviews: 190,
    treatmentsLastYear: 2490,
    yearsExperience: 15,
    basePrice: 1355.76,
    avatarUrl:
      'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
    hospital: 'New Weight',
    slug: 'dr-lay-raphael',
    qunoScoreText: 'Very Good',
  };

  it('should render the name correctly', () => {
    render(<DetailCard doctor={doctor} />);
    const doctorName = screen.getByTestId('doctor-name');
    expect(doctorName.textContent).toEqual(doctor.name);
  });

  it('should render the recommendation number correctly', () => {
    render(<DetailCard doctor={doctor} />);
    const recommendation = screen.getByTestId('recommendation');
    const calculatedRecommendation = calculatePercantageOfReviews(
      doctor.ratingsAverage,
    );
    expect(recommendation.textContent).toEqual(`${calculatedRecommendation}%`);
  });
});
