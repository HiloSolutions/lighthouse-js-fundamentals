//Make Square
function makeSquare(width){
  let square = "";
  for (i = 1; i <= width; i++){ // will affect height by manipulating end condition
    for (j = 1; j <= width; j++){ //will affect width by manipulating end condition
      square += "*";
    }
    square += "\n";
  }
  return square;
}

console.log(makeSquare(10));



//Make Hollow Square (using a nested function)
function makeLine(row){
  var line = ""
  for (x = 1; x <= row; x++){
    if(row === 1 || row === width){
      line += "+ ";
    } else {
      line = "* " + "  ".repeat(width - 2) + "* ";
    }
  }
  return line + "\n";
}

function buildHollowSquare (width){
  let hollowSquare = "";
  let row = 1;
  for (row = 1; row <= width <=; row++){
      hollowSquare = hollowSquare + makeLine(row);
  }
  return hollowSquare;
}

console.log(buildHollowSquare(5));

//make hollow square without nested function
function makeSquare(width){
  let square = "";
  for (i = 1; i <= width; i++){
    if (i === 1 || i === width){
      square += "*".repeat(width) + "\n";
    } else {
      square += "*" + " ".repeat(width-2) + "*" + "\n";
    }
  }
  return square;
}
console.log(makeSquare(5));

//make RIGHT TRIANGLE
function makeTriangle(width) {
  let triangle = "";
  for(i = 1; i <= width; i++) {
    for(j = 0; j < width-i; j++){
      triangle += " ";
    }
    for(k = 0; k < i; k++){
      triangle += "*";
    }
    triangle += "\n";
  }

  return triangle;
  }

console.log(makeTriangle(5))


//make LEFT TRIANGLE
function makeTriangle(width){
  let triangle = "";
  for (i = 1; i <= width; i++){
    for(j = 1; j <= i; j++){
      triangle += "*";
    }
    triangle += "\n";
  }
  return triangle;
}

console.log(makeTriangle(5));


//make Downward left TRIANGLE
function makeTriangle(width){
  let triangle = "";
  for(i = 1; i <= width; i++){
    for(j = 1; j <= width - i; j++){
      triangle += "*";
    }
    triangle += "\n";
  }
  return triangle;
}

console.log(makeTriangle(10));

//make HOLLOW triangle star
function makeTriangle(width){
  let triangle = "";
  for(i = 1; i <= width; i++){ //START function to add the line break
    if(i === width){ // if we are at bottom, all stars are present.
      triangle += "*".repeat(width);
    } else {
      for(j = 1; j <= i; j++){
        if(j === 1 || j === i){
          triangle += "*";
        } else {
          triangle += " ";
        }
      }
    }
    triangle += "\n";
  }
  return triangle;
}
console.log(makeTriangle(6));

//make pyramid
function makePyramid(width){
  let pyramid = "";
  for(i=1; i<=width; i++){
    for(j=1; j<=width-i; j++){//add spaces that will allow num of stars to fit in middle of block
      pyramid += " ";
    }
    for(k=0; k<2*i-1; k++){//add ** to the base each time
      pyramid += "*";
    }
    pyramid += "\n";
  }
  return pyramid;
}

console.log(makePyramid(2));

//make inverted pyramid
function makePyramid(width){
  let pyramid = "";
  for(i=0; i<width; i++){
    for(j=0; j<i; j++){
      pyramid += " ";
    }
    for(k=0; k<2*(width-i)-1; k++){
      pyramid +="*";
    }
    pyramid += "\n";
  }
  return pyramid;
}

console.log(makePyramid(5));

//make hollow pyramid
function makePyramid(width){
  let pyramid = "";
  for(i=1; i<=width; i++){
    if(i!==width){
      for(j=1; j<=width-i; j++){
        pyramid += " ";
      }
      for(k=1; k<=2*i-1; k++){
        if (k===1 || k===2*i-1){
          pyramid += "*";
        } else {
          pyramid += " ";
        }
      }
    } else {
      pyramid += "*".repeat(2*i-1);
    }
    
    pyramid += "\n";
  }
  return pyramid;
}

console.log(makePyramid(5))

//Diamond
function makeDiamond(width){
  let diamond = "";
  //pyramid
  for(i=1; i<=width; i++){
    for(j=1; j<=width-i; j++){
      //make spaces
      diamond += " ";
    }
    for(k=1; k<=2*width-i; k++){
      //make stars
      diamond += "*";
    }
    diamond += "*\n";
  }
  //inverted pyramid
  for(l=1; l<=width; l++){
    for(m=1; m<=l; m++){
      diamond += " ";
    }
    for(n=1; n<=2*(width-l)-1; n++){
      diamond += "*";
    }
    diamond += "*\n";
  }
  
  return diamond;
  }
  
console.log(makeDiamond(5));