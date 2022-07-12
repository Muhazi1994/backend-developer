//Balok Argument
function balokGeometri(p, l, t) {
    console.log(p * l * t);
  }
  
  balokGeometri(10, 20, 2);
  balokGeometri(3, 2, 4);
  
  // function returnc
  function balokReturn(w, l, h) {
    console.log("return: " + w * l * h);
    return w * l * h;
  }
  
  let balokOne = balokReturn(10, 11, 12);
  let balokTwo = balokReturn(11, 12, 13);
  console.log("Balok 1 + Balok 2 :" + (balokOne + balokTwo));
  
  console.log(
    "------------------------------------------------------------------------------------"
  );
  
 