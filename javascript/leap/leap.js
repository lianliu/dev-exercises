function isLeapYear(year){
	if(typeof year !== "number") {
		throw "Not a number. Please give a number and try again.";
	}
	if(year <= 0) {
		throw "Invalid number vaule. The number given should greater than 0.";
	}

	if(year % 4 === 0 && year % 100 !== 0) { return true; }
	else if (year % 400 === 0) { return true; }
	else { return false; }

};

module.exports = isLeapYear;