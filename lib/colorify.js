var ANSIColors = {};

var colorCodes = { 
  reset: 0 ,
  white: 37 ,
  black: 30 ,
  blue: 34 ,
  cyan: 36 ,
  green: 32 ,
  magenta: 35 ,
  red: 31 ,
  yellow: 33 
};

function getANSIColorFromCode(num){
  const prefix = '\x1b[';
  const suffix = 'm';
  return prefix + num + suffix;
}

for (var code  in colorCodes) {
  ANSIColors[code] = getANSIColorFromCode(colorCodes[code]);
}

module.exports = function(color, input){
  if (! ANSIColors[color]) return input;
  return ANSIColors[color] + input + ANSIColors.reset;
};
