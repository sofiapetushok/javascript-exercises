const convertToCelsius = function(temp) {
  cDeg = (temp - 32) / 1.8000;
  rounded = Math.round(cDeg * 10) / 10;
  if (temp < 0) {
    rounded = Math.round(cDeg * 10) / 10;
  }
  if (cDeg === 0) {
    rounded = 0;
  }   
  return rounded;
};

const convertToFahrenheit = function(temp) {
  fDeg = temp*1.8000 + 32.00;
  if (temp < 0) {
    rounded = Math.round(fDeg * 10) / 10;
  } else if (fDeg === 0) {
    rounded = 0;
  } else {
    rounded = Math.round(fDeg * 10) / 10;
  }
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
