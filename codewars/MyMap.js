const arr = [1, 2, 3, 4];

/**
 * myMap - own implementation .map.
 * @param {function} cb - callback(currItem, idx, arr).
 * @returns {Array} new array.
 */
Array.prototype.myMap = function (cb) {
    const arr = this;
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        newArr.push(cb(arr[i], i, arr))
    }

    return newArr;
}

console.log(
    arr.myMap((currItem, idx, arr) => currItem + 1)
)

/**
 * showTeamMembers - if data is still loading show the loading screen else show the board
 * members and volunteers.
 * @param {Array} members - volunteers and board members.
 * @param {String} status - volunteer || boardMember.
 * @returns {*}
 */

