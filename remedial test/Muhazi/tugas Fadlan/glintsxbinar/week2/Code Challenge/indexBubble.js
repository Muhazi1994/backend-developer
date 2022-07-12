const data = require('./lib/arrayGongjang');
const test = require('./lib/arrayTest');

/*
 * Code Here!
 * */

// Optional
function clean(data) {
  return data.filter(i => typeof i === 'number');
}

// Should return array
function sortAscending(data) {
  // Code Here
  const d = clean(data);

  for(let i = 1; i < d.length; i++){
      for(let j = 0; j < d.length; j++){
       if(d[i] < d[j]){
           let da = d[i];

           d[i] = d[j];
           d[j] = da; 
       }   
      }
  }
  

  return d;
}

// Should return array
function sortDecending(data) {
  // Code Here
  const d = clean(data);
  
  for(let i = 1; i < d.length; i++){
    for(let j = 0; j < d.length; j++){
     if(d[i] > d[j]){
         let da = d[i];

         d[i] = d[j];
         d[j] = da; 
     }   
    }
}
  return d;
}

// DON'T CHANGE
test(sortAscending, sortDecending, data);