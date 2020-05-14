const months = [
  "Easter Egg",
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];
const getDateFromString = (stringDate) =>
  `${months[parseInt(stringDate.slice(5, 7))]} ${stringDate.slice(8, 10)}, ${stringDate.slice(0,4)}`;

export default getDateFromString;
