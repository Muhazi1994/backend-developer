function deretAngka(str){
    let a = "";
    for(var i=1;i<=str;i++){ 
      a += cekAngka(i);
      a = a + ","
    }
    return a;
  }
  function cekAngka(angka){
  
      let KelipatanTujuh = angka % 7 == 0;
      if(KelipatanTujuh) {
        return "bestada";
      }
      let KelipatanLima = angka % 15 == 0;
      if(KelipatanLima) {
        return "sukses";
      }
      return angka;
  }
  console.log(deretAngka([15]));

  console.log(`==================================`);

  function data (arr) {
    for (var i = 0; i < arr.length; i++){
        for (var j=0; j < arr.length -i -1; j++){
            if(arr[j] < arr[j-1]){
                [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
            }
        }
    }
    return arr;   
}
console.log(data([3,7,1,2,6,7,8,9,12,5,3,12]))