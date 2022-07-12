var data = [15, 9, 18, 7];
console.log(`data = ${data.join(" - ")}`);

var bs = function(){
    // looping index
    for(var i = 0; i < data.length-1; i++){
    // looping perbandingan data
    for(var j=0; j < data.length-1; j++){
        //algoritme bubble sort
        if(data[j] > data[j+1]){
            temp = data[j];
            data[j] = data[j+1];
            data[j+1]= temp;
        }
    }
    console.log(`Proses ke-${i+1} = ${data.join(" - ")}`);
    }
}