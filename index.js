"use strict"

Object.prototype.cloneOwn = function () {
    var obj = this;

    if (typeof obj !== 'object')
        return obj;

    if (obj instanceof Array) {
        return obj.cloneArray();
    }

    var attrs = arguments[0]
    var enable_spec_attr = true;
    if (!(attrs instanceof Array)) {
        attrs = obj;
        enable_spec_attr = false;
    }

    var result = {},
        i;

    for (i in attrs) {
        var attr = enable_spec_attr ? attrs[i] : i;
        if (obj.hasOwnProperty(attr)) {
            if (obj[attr] instanceof Array) {
                result[attr] = obj[attr].cloneArray();
            }
            else if (typeof obj[attr] === 'object') {
                result[attr] = obj[attr].cloneOwn();
            } else {
                result[attr] = obj[attr];
            }
        }
    }

    return result;
};

Array.prototype.cloneArray = function (array) {

    var array = this;
    if (!(array instanceof Array))
        return [];

    var result = [],
        i;

    for (i in array) {
        if (typeof array[i] !== 'object') {
            if (array.hasOwnProperty(i)) {
                result[i] = array[i];
            }

            continue;
        }

        //clone object
        result[i] = array[i].cloneOwn();
    }

    return result;
}

