 function add(x, y) {
    return x + y;
}

function mul(x, y) {
    return x * y;
}

//works like:
//var s = make(1)(2,3)(4)(5);
//s(add);
//s === 15
//when called without assigning
//s(3);
//s(add);
//s === 15
//but s = s(3);
//s === 18
function make() {
    var lastElement = arguments[arguments.length - 1];
    var argumentsArr = Array.prototype.slice.call(arguments);

    if (lastElement instanceof Function)
    {
        argumentsArr.pop();
        return argumentsArr.reduce(lastElement);
    }
    else
    {
        argumentsArr.unshift(null);
        var copyFunc = Function.prototype.bind.apply(make, argumentsArr);
        return copyFunc;
    }
}