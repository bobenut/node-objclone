# objclone

## Purpose
A node.js module for cloning javascript object, array.

## Installation
Via npm.
```
npm install objclone
```

## Usage
Clone object.
```
var p1 = {
    prp1: 'v1',
    prp2: 20,
    prp3: 'v2'
};

var r1 = p1.cloneOwn();
console.log(r1)
```

Clone Array.
```
var p4 = ['v1', 'v2', 999, 88.123, 'v3'];

var r4 = p4.cloneOwn();
console.log(r4);
```

Clone object that mix up object with array.
```
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

var r3 = p3.cloneOwn();
console.log(r3)
```

## License
Objclone is licensed under the MIT.
