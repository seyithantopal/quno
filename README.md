# Quno

This is a coding challenge for a company called Qunomedical.

## Installation

For backend,

```bash
$ cd backend
$ npm install
$ npm run dev
```

Server will be ready on http://localhost:4000

For frontend,

```bash
$ cd frontend
$ npm install
$ npm run dev
```

Server will be started on http://localhost:3000

## Things I did

Since the mockups were not complete on purpose, I had to add some missing pieces. For example, In the design mockup;

1. there was a total number of reviews being shown to the user but this data was not provided from the backend server. I created a property for it.
2. there was a hospital name section where a doctor works but it was not provided. I created a property for it on the server side.
3. there was a section for a doctor's speciality but it was not provided. I had to create a property for it in the backend.
4. there was a section where users could see how much a doctor would be recommended. However, this data was not not provided. Instead, the average rating was provided. And I used a formula to calculate the percantage of people who would recommend a doctor.
   `percentage = (averageRating - MINIMUM_RATING) / (MAXIMUM_RATING - MINIMUM_RATING) * 100)`
5. there was a section of showing how many years of experience a doctor has but in another design mockup there was a section of showing how long a doctor has been practising. However, the data that was provided to me was only how many years of experience a doctor has. Thus, I had to use a formula to find how long a doctor has been practising.
   `timePeriod = currentYear - yearsOfExperience`

Here are the things I did for improvements;

1. Next.js 13 introduced the @next/font package that allows us to optimize custom fonts and reduce Cumulative Layout Shift when the size of the containing element changes when the web font is downloaded. I used this package to add the custom fonts which the design mockups use.
2. Since there are lots of additional functionalities that could make writing CSS much easier and better, I used a CSS preprocessor called SCSS.
3. In order to write scoped styles in the app, I used CSS Modules.
4. Since it makes it great for SEO, I used server-side-rendering for the app.
