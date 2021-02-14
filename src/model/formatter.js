/**
 * Formats a string as a title
 * @function
 * @public
 * @param {string} str the string to be formatted
 * @return {string} the formatted string
 */
export function titleFormat(str = '') {
  return str != null
    ? str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      })
    : '';
}
