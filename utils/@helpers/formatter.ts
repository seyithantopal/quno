export const currencyFormat = (num: number, currency: string) => {
  return `${currency}${num
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
};
