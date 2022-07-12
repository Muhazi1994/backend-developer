let rows = 5;
let segitigaKeatas = "";
for(let i=0; i < rows; i++){
    for(let j=rows; j > i; j--){
        segitigaKeatas += "*";
    }
    segitigaKeatas += "\n"
}
console.log(segitigaKeatas);