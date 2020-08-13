function getCoordinates(vector) {
  /*
    Make a program that takes as input 2 vectors, (magnitude, degree)
    and returns their sum.
  */
  const [magnitude, degree] = vector;
  const hypotenuse = magnitude;
  
  function degreeToRadians(degree) {
    const radians = degree * (Math.PI / 180);
    return radians;
  }
  
  function getCos(degree) {
    // 1. transform degree to radians
    return Math.cos(degreeToRadians(degree));
  }
  
  function getSin(degree) {
    // 1. transform degree to radians
    return Math.sin(degreeToRadians(degree));
  }

  const sin = (getSin(degree) * hypotenuse).toFixed(2);
  const cos = (getCos(degree) * hypotenuse).toFixed(2);

  return [cos, sin];
}

function sumVectors(vector1, vector2) {
  const result = [0, 0];
  
  let i = 0;
  do {
    result[i] = parseFloat(vector1[i]) + parseFloat(vector2[i]);
    i++;
  } while (i < 2);

  return result;
}

const vector1 = getCoordinates([8, 100]);
const vector2 = getCoordinates([3, 210]);

console.log('Result:::::::::::::: ');
console.log(sumVectors(vector1, vector2));