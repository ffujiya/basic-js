const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(!sampleActivity 
    || typeof sampleActivity !== 'string' 
    || Number.parseFloat(sampleActivity) <= 0
    || Number.parseFloat(sampleActivity) > MODERN_ACTIVITY
    || !isFinite(Number.parseFloat(sampleActivity)))  return false;

  let k=0.693/HALF_LIFE_PERIOD;
  let age = Math.log(MODERN_ACTIVITY/Number.parseFloat(sampleActivity))/k;
  return Math.ceil(age);
};