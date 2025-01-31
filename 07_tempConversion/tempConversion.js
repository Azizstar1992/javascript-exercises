const convertToCelsius = function(far) {
  return  Math.round(((far-32)/1.8)*100) /100;
};

const convertToFahrenheit = function(cel) {
  return  Math.round(((cel *1.8) +32)*100)/100;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
