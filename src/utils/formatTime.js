export default (time) => {
  const date = new Date(+time);

  // padStart  不足两位就在字符前面填充 0
  const M = (date.getMonth() + 1).toString().padStart(2, '0')
  const D = (date.getDay() + 1).toString().padStart(2, '0')
  return `${date.getFullYear()}-${M}-${D}`;
}