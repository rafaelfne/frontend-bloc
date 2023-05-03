export const formatDate = (date: string) => {
  const dateObject = new Date(date);
  const day = dateObject.getDate();
  const _moth = dateObject.getMonth() + 1;
  const month = _moth < 10 ? `0${_moth}` : _moth;
  const year = dateObject.getFullYear();
  return `${day}/${month}/${year}`;
};