const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity == undefined || typeof sampleActivity != 'string')  return false;
  const now = Number(sampleActivity);
  if (isNaN(now) || now <= 0 || now >= 9000) return false;
  const dating = Math.ceil(Math.log10(MODERN_ACTIVITY / now) / (Math.log10(2) / HALF_LIFE_PERIOD));
	if (dating < 0)
		return false;
	else
		return dating;
};
