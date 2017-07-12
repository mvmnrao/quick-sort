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
        var finalArray = arrQuickSort(input, 0, input.length - 2, input[input.length - 1]);
        return finalArray;
    }

};
module.exports = quickSort;

function arrQuickSort(array, left, right, pivot) {

    if (array.length <= 1) {
        return array;
    }

    var leftArray = [];
    var rightArray = [];

    while (true) {

        while (array[left] < pivot) {
            ++left;
        }

        while (array[right] > pivot) {
            --right;
        }

        if (left >= right) {
            array[array.length - 1] = array[left];
            array[left] = pivot;
            break;
        }
        else {
            var r = array[right];
            array[right] = array[left];
            array[left] = r;
        }
    }

    leftArray = array.slice(0, left);
    rightArray = array.slice(left, array.length);

    return arrQuickSort(leftArray, 0, leftArray.length - 2, leftArray[leftArray.length - 1]).
    concat(arrQuickSort(rightArray, 0, rightArray.length - 2, rightArray[rightArray.length - 1]));
};
