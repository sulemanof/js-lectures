let assert = require('assert');
let filter = require('./filter');
let { films, shell, stock } = require('./proxy');

describe('es6 features test', function() {
    describe('array filter', function() {
        it('test 1', function() {
            assert.deepEqual(
                filter(8,5,67,3,4,6,67,7,4,5,6,7,8,4,3,4,6,7,8,9),
                [ 8, 5, 67, 3, 4, 6, 7, 9 ]
            );
        });
        it('test 2', function() {
            assert.deepEqual(
                filter(1,4,1,3,2,3,1,6,7,5,7,2,3,4,5,7,1,2,34,1,3,4,6,3,3,5,6,7),
                [ 1, 4, 3, 2, 6, 7, 5, 34 ]
            );
        });
        it('test 3', function() {
            assert.deepEqual(
                filter(3,5,6,6,3,5,6,87,4,3,32,4,56,7,8,4,3,23,5,67),
                [ 3, 5, 6, 87, 4, 32, 56, 7, 8, 23, 67 ]
            );
        });
        it('test 4', function() {
            assert.deepEqual(
                filter(4,4,5,3,3,4,4,5,5,5,5,5,5,3,23,2,2,3,3,3,3,3,3,3,4,54,56,6,67,7,67,6,6,6,6),
                [ 4, 5, 3, 23, 2, 54, 56, 6, 67, 7 ]
            );
        });
        it('test 5', function() {
            assert.deepEqual(
                filter(5,5,3,2,2,3,3,3,4,5,6,6,7,7,8,5,5,3,3,4,4,5),
                [ 5, 3, 2, 4, 6, 7, 8 ]
            );
        });
    });

    describe('films shell', () => {
        it('test 1', () => {
            assert.equal(
                shell['Spider-man'],
                films['Spider-man']
            )
        });
        it('test 2', () => {
            assert.notEqual(
                shell['Spider-man'],
                films['Spider-man']
            )
        });
        it('test 3', () => {
            assert.equal(
                shell['Thor'],
                films['Thor']
            )
        });
        it('test 4', () => {
            assert.notEqual(
                shell['Thor'],
                films['Thor']
            )
        });
    });
});
