/**
 * Expose `isNullString`.
 */

module.exports = isNullString;

/**
 * @param {String | Object} value
 * @return {Boolean}
 */
function isNullString(value) {
    if (value === '' || value === null || value === undefined) {
        return true        
    }
    return false
}
