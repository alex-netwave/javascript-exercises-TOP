const convertToCelsius = function(temperatureF) {
  let temperatureC = (temperatureF -32) * 5/9;
  if (Math.floor(temperatureC) === 0) return 0;
  else return temperatureC.toFixed(1);
};

const convertToFahrenheit = function(temperatureC) {
  let temperatureF = (temperatureC + 32) * 9/5;
  if (Math.floor(temperatureF) === 0) return 0;
  else return temperatureF.toFixed(1);
};

convertToCelsius(0);
convertToFahrenheit(0);
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
