const leapYears = function(year) {
    if (year%100) {
        if(year%400) return true;
        else return false;
    }
    if (year%4) return true;
};

// Do not edit below this line
module.exports = leapYears;
