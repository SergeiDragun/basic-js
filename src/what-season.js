const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(springDate) {
  if (typeof springDate == 'undefined') {
    return 'Unable to determine the time of year!'
  }

  if (springDate.hasOwnProperty("getMonth")) {
      throw new Error("Invalid date!")
  }
  
  try  {
    (springDate.getMonth())
  } catch {
    throw new Error("Invalid date!")
  }

  if(springDate.getMonth() == 0 || springDate.getMonth() == 1 || springDate.getMonth() == 11) {
      return "winter"
  }

  else if(springDate.getMonth() == 2 || springDate.getMonth() == 3 || springDate.getMonth() == 4) {
      return "spring"
  }

  else if(springDate.getMonth() == 5 || springDate.getMonth() == 6 || springDate.getMonth() == 7) {
      return "summer"
  }

  else if(springDate.getMonth() == 8 || springDate.getMonth() == 9 || springDate.getMonth() == 10) {
      return "fall"
  } 
  }

module.exports = {
  getSeason
};
