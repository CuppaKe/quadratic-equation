module.exports = function solveEquation(equation) {

	let bin = equation.replace(/\s/g, "GG")
	let arr = bin.split("GG")

	let a = +arr[0];
	let b = +arr.slice(3,5).join("");
	let c = +arr.slice(7,9).join("");

	let disc = Math.pow(b,2) - 4*a*c;
	let x1 = Math.round((-b + Math.sqrt(disc))/(2*a));
	let x2 = Math.round((-b - Math.sqrt(disc))/(2*a));

	return [x1,x2].sort(function (a,b) {
		return a-b;
	})
}
 

