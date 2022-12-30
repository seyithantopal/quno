import localFont from '@next/font/local';

export const nettoFont = localFont({
  src: '../../assets/fonts/netto_ot.ttf',
  weight: '400',
  display: 'swap',
});

export const adelleSansFont = localFont({
  src: [
    {
      path: '../../assets/fonts/AdelleSans.ttf',
      weight: '400',
    },
    {
      path: '../../assets/fonts/AdelleSans.ttf',
      weight: '700',
    },
  ],
  display: 'swap',
});
