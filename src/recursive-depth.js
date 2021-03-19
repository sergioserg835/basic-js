const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
	calculateDepth(arr) {
		let depthOfArr = 1;
		arr.forEach((item) => {
			if (typeof(item) === 'object') {
				this.depthOfSubarr = this.calculateDepth(item) + 1;
				depthOfArr = Math.max(this.depthOfSubarr, depthOfArr);
			}
		});
		return depthOfArr;
	}
};