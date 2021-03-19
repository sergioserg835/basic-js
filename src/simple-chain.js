const CustomError = require("../extensions/custom-error");

const chainMaker = {
	chain: [],
	getLength() {
		this.chain.length;
		return this;
	},
	addLink(value) {
		this.chain.push(value);
		return this;
	},
	removeLink(position) {
		if (position < 0 || !Number.isInteger(position) || !Number(position))  {
			this.chain.length = 0;
			throw new Error();
		}
		else {
			this.chain.splice(position - 1, 1);
			return this;
		}
	},
	reverseChain() {
		this.chain.reverse();
		return this;
	},
	finishChain() {
		const result = this.chain.map(el => {
			return el = '( ' + `${el}` + ' )~~';
		});
		this.chain.length = 0;
		return result.join('').slice(0, -2);
	}
};

module.exports = chainMaker;
