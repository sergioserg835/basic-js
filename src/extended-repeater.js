const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
	str + '';
	let outputStr = str;
	options.addition + '';
	if (options.separator == undefined) options.separator = '+';
	if (options.additionSeparator == undefined) options.additionSeparator = '|';
	let additionalStr = '';
	if (options.addition !== undefined) {
		if (options.additionRepeatTimes !== undefined) {
			for (let i = 1; i <= options.additionRepeatTimes; i++) {
				if (i != options.additionRepeatTimes)
					additionalStr +=  options.addition + options.additionSeparator;
				else 
					additionalStr += options.addition;   
			}
		}
		else {
			additionalStr += options.addition;
		}
	}
	(additionalStr == undefined) ?  outputStr += str : outputStr +=  additionalStr;
	repeatStr = outputStr;
	for (i = 2; i <= options.repeatTimes; i++) {
		repeatStr +=  options.separator + outputStr;     
	}
	return repeatStr;
};
  