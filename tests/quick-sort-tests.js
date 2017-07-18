'use strict';

var assert = require('assert');
var quickSort = require('../src/quick-sort');

describe('Quick Sort', function () {

    it('throws an error if the input not an array', function () {

        try {
            quickSort(null);
        } catch (err) {
            return;
        }
        assert(false, 'Expected exception to be thrown.');
    });

    it('handles empty list', function () {
        var results = quickSort([]);
        assert(Array.isArray(results), 'Expected result to be array');
        assert(results.length === 0, 'Expected array to be empty');
    });

    it('sorts list of one element', function () {
        var results = quickSort([1]);
        assert.deepEqual(results, [1], 'Expected arrays to match');
    });

    it('sorts an array of numbers', function () {
        //var unsorted = [9, 8, 7, 10, 6, 100, 5, 4, 99, 3, 2, 1];
        var unsorted = [35, 33, 42, 10, 14, 19, 27, 44, 26, 31];
        var sorted = [10, 14, 19, 26, 27, 31, 33, 35, 42, 44];
        var results = quickSort(unsorted);
        assert.deepEqual(results, sorted, 'Expected arrays to match');
    });

    it('sorts an array of words', function () {
        var unsorted_words = ['gamma', 'beta', 'alpha', 'ATM'];
        var sorted = ['ATM', 'alpha', 'beta', 'gamma'];
        var results = quickSort(unsorted_words);
        assert.deepEqual(results, sorted, 'Expected arrays to match');
    });
    //GIT;
});