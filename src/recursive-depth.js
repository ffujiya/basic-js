const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 1) {
    arr.forEach((item) => {
      let count = 1;
      if (Array.isArray(item)) {
        count = count + this.calculateDepth(item, count);
        depth = Math.max(depth, count);
      }
    });
    return depth;
  }
};