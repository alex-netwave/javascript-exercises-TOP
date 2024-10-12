const removeFromArray = function(userArray) {
    const tempArray = userArray;
    for (const item of arguments){
        tempArray.splice(tempArray.indexOf(item),1);
    }
    return tempArray;
};

console.log(removeFromArray([1, 2, 3, 4], 3))

// Do not edit below this line
module.exports = removeFromArray;
