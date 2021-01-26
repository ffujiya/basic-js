const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  return !Array.isArray(members) ? false : members.
    filter(item => typeof item === 'string').
    map(el => el.trim().toUpperCase().charAt(0)).
    sort().
    join('');
};