/**
 * Formatter container
 * @method
 * @public
 */
export const Formatter = {
  toTitle: titleFormat,
  toUser: userFormat,
  toPaymentState: getPaymentState,
  toLocaleNumber: Intl.NumberFormat().format,
  toDate: getDateString,
};

/**
 * Formats date or creates a new one
 * @function
 * @public
 * @param {Date} date a date object
 * @return {string} formatted date
 */
export function getDateString(date = new Date()) {
  return date.toLocaleDateString();
}

/**
 * Obtains payment status value state
 * @function
 * @public
 * @param {string} status the status letter
 * @return {string} the status text
 */
export function getPaymentState(status = '') {
  switch (status) {
    case 'P':
      return 'Success';
    case 'E':
      return 'Error';
    case 'W':
      return 'Warning';
    case 'H':
      return 'Information';
    default:
      return 'None';
  }
}

/**
 * Formats an ID to upper case.
 * @function
 * @public
 * @param {string} usnam the user id
 * @return {string}
 */
export function userFormat(usnam = '') {
  return usnam != null ? usnam.toLocaleUpperCase() : 'UNKNOWN';
}

/**
 * Formats a string as a title.
 * @function
 * @public
 * @alias Formaterr~toTitle
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
