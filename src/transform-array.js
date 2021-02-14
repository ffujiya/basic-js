const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('Argument is not an array!');
  let initial = arr.slice();

  for (let i = 0; i < initial.length; i++) {
    switch (initial[i]) {
      case '--discard-next':
        if (initial[i + 1] !== undefined) {
          initial.splice(i + 1, 1);
        }
        break;
      case '--discard-prev':
        if (initial[i - 1] !== undefined) {
          initial.splice(i - 1, 1);
        }
        break;
      case '--double-next':
        if (initial[i + 1] !== undefined) {
          initial.splice(i + 1, 0, initial[i + 1]);
        }
        break;
      case '--double-prev':
        if (initial[i - 1] !== undefined) {
          initial.splice(i - 1, 0, initial[i - 1]);
          i++;
        }
        break;
    }
  }

  return initial.filter(item => item !== '--discard-next' && item !== '--discard-prev' && item !== '--double-next' && item !== '--double-prev');
};
