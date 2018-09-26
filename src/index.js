module.exports = function solveEquation(equation) {

	let arr = equation.replace(/\s/g, '').match(/(\+|\-|\d)\d{1,}/g);
	let a = +arr[0];
	let b = +arr[1];
	let c = +arr[2];

	let disc = Math.pow(b, 2) - 4 * a * c;
	let x1 = Math.round((-b + Math.sqrt(disc)) / (2 * a));
	let x2 = Math.round((-b - Math.sqrt(disc)) / (2 * a));

	return [x1,x2].sort((a, b) => a - b);
	
}
 

