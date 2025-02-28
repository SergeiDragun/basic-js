const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function dateSample(num) {
  if (!num || !+num || typeof num !== "string" || +num > MODERN_ACTIVITY || +num <= 0) {
      return false
  }
  let k = 0.693/5730
  let t = (Math.log(MODERN_ACTIVITY/+num))/k
  return Math.ceil(t)
}

module.exports = {
  dateSample
};
