export const toBRL = (val: number) => {
  return val.toLocaleString('pt-br', {
    currency: 'BRL',
    style: 'currency'
  });
};
