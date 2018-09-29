/**
 * Function solves quadratic equation
 * @param {string} equation - quadratic equation
 * @return {array} solutions as ordered array
 */
module.exports = function solveEquation(equation) {
  const arr = equation.replace(/\s/g, '').match(/(\+|\-|\d)\d{1,}/g);
 
  // ax^2+bx+c=0
 
  const a = +arr[0];
  const b = +arr[1];
  const c = +arr[2];

  const disc = Math.pow(b, 2) - 4 * a * c;
  const x1 = Math.round((-b + Math.sqrt(disc)) / (2 * a));
  const x2 = Math.round((-b - Math.sqrt(disc)) / (2 * a));

  return [x1, x2].sort((x, y) => x - y);
};
