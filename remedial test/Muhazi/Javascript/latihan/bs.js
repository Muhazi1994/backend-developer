function bubbleSort (arr){
    for(let i=0; i < arr.length; i++){
        for(let j=0; j < arr.length -i -1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr;
}
console.log(bubbleSort([20,15,60,5,10,100,123,13,500,400]));

