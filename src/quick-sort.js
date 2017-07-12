'use strict';

function quickSort(input) {
    if (!Array.isArray(input)) {
        throw ("Input should be an Array.");
    }

    if (input.length === 0 || input.length === 1) {
        return input;
    }

    if (isNaN(input[0])) {
        return input.sort();
    }
    else {
        return input.sort(function (a, b) { return a - b; });
    }

};
module.exports = quickSort;