const removeFromArray = function(userArray) {
    const tempArray = userArray;
    for (const item of arguments){
        if (typeof(item) == "object")
            continue;
        let i = tempArray.indexOf(item);
        tempArray.splice(i,1);
    }
    return tempArray;
};

console.log(removeFromArray([1, 2, 3, 4], 1))

// Do not edit below this line
module.exports = removeFromArray;
