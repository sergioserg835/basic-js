const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if (matrix == undefined || matrix.length == 0) {
    return [];
  }
  else {
      let counter = 0;
      matrix.filter(item => item.forEach((item) => {if (item == '^^') counter++}))
      return counter;
  }
};
