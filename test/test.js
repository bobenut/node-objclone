require('../index.js')
var assert = require('assert');

//--------------------------case1----------------------------
var p1 = {
    prp1: 'v1',
    prp2: 20,
    prp3: 'v2'
};

var r1 = p1.cloneOwn();
//console.log(r1)
console.log(assert.deepEqual(p1, r1, 'case1 not equal') ? '' : 'case1 ok');

//--------------------------case2----------------------------
var p2 = {
    prp1: 'v1',
    prp2: 20,
    prp3: 'v2',
    prp4: {
        prp4_1: 'v4_1',
        prp4_2: 'v4_2',
        prp4_3: 1000
    }
};

var r2 = p2.cloneOwn();
//console.log(r2)
console.log(assert.deepEqual(p2, r2, 'case2 not equal') ? '' : 'case2 ok');

//--------------------------case3----------------------------
var p3 = {
    prp1: 'v1',
    prp2: 20,
    prp3: 'v2',
    prp4: {
        prp4_1: 'v4_1',
        prp4_2: 'v4_2',
        prp4_3: 1000
    },
    prp5: ['prp5_v1', 'prp5_v2', 999, 88.123, 'prp5_v3']
};

//console.log(r3)
var r3 = p3.cloneOwn();
console.log(assert.deepEqual(p3, r3, 'case3 not equal') ? '' : 'case3 ok');

//--------------------------case4----------------------------
var p4 = ['v1', 'v2', 999, 88.123, 'v3'];

var r4 = p4.cloneOwn();
//console.log(r4)
console.log(assert.deepEqual(p4, r4, 'case4 not equal') ? '' : 'case4 ok');

//--------------------------case5----------------------------
var p5 = ['v1', 'v2', 999, 88.123, 'v3',
    {
        v4_p1: 'v4_v1',
        v4_p2: 'v4_v2',
        v4_p3: 999,
        v4_p4: 99.123,
        v4_p5: {
            v4_p5_p1: 'v4_p5_v1',
            v4_p5_p1: 888
        },
        v4_p6: ['v4_p6_v1', 'v4_p6_v2']
    }];

var r5 = p5.cloneOwn();
//console.log(r5)
//console.log(assert.deepEqual(p5, r5, 'case5 not equal') ? '' : 'case5 ok');

//--------------------------case6----------------------------
var p6 = [];
var r6 = p6.cloneOwn();
//console.log(r6)
console.log(assert.deepEqual(p6, r6, 'case6 not equal') ? '' : 'case6 ok');

//--------------------------case7----------------------------
var p7 = {};
var r7 = p7.cloneOwn();
//console.log(r7)
console.log(assert.deepEqual(p7, r7, 'case7 not equal') ? '' : 'case7 ok');