/*
 * DON'T CHANGE
 * */

const data = [];
const randomNumber = Math.floor(Math.random() * 100);

function createArray() {
  for (let i = 0; i < randomNumber; i++) {
    data.push(createArrayElement())
  }

  // Recursive
  if (data.length == 0) {
    createArray();
  }
}

function createArrayElement() {
  let random = Math.floor(Math.random() * 1000);

  return [null, random][Math.floor(Math.random() * 2)]
}

createArray()

/*
 * Code Here!
 * */
console.log(data);

clean();

function clean() {
  // Code here
  for(let i = 0; i <= randomNumber; i++){
      if(data[i] === null){
      data.splice(i, 1);
     }
  }
  for(let i = 0; i <= randomNumber; i++){
    if(data[i] == null){
      data.splice(i, 1);
    }
  }
  for(let i = 0; i <= randomNumber; i++){
    if(data[i] == null){
      data.splice(i, 1);
    }
  }
  for(let i = 0; i <= randomNumber; i++){
    if(data[i] == null){
      data.splice(i, 1);
    }
  }
  console.log(data);
}

/*
 * DON'T CHANGE
 * */

if (process.argv.slice(2)[0] == "test") {
  try {
    clean(data).forEach(i => {
      if (i == null) {
        throw new Error("Array still contains null")
      }
    })
  }

  catch(err) {
    console.error(err.message);
  }
}
