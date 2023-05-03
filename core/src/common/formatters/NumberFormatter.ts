export const formatNumber = (number: number) => {
  return number.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 3
  });
};

export const formatPercentage = (number: number) => {
  if (number === 0) return '-';
  return (number * 100).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 3
  }) + '%';
};