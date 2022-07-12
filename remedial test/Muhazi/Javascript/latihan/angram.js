// Case :

// create a function that accept two string parameter
// your function should be able to determine the first parameter is anagram with from the second parameter vice versa
// anagram will happen if the amount of each letter from first parameter is exactly equal with the second parameter and vice versa
// don't use array build in function
// examples:


// anagram('aaz', 'zza') => false

// anagram('anagram', 'nagaram')) => true


function anagram(arr, arr2) { // 
  let obj = {};

  if (arr.length !== arr2.length) { // cek kondisi harus sama panjang huruf dan array jumlah huruf jika tidak sama maka return false
    return false;
  }

  for (let i = 0; i < arr.length; i++) { // cek isi array paramater 1
    if (!obj[arr[i]] ) { // jika kondisi bukan parameter 1 maka sama dengan satu
      obj[arr[i]] = 1; // angka pertam sama dengan satu cek angka selanjutnya
    } else {
      obj[arr[i]] = obj[arr[i]] + 1; // jika hurufnya sama maka ditambah satu
    }
  }

  for (let i = 0; i < arr2.length; i++) { // isi parameter kedua jika tidak sama maka salah
    if (!obj[arr2[i]]) { // 
      return false;
    }

    obj[arr2[i]];
  }

  return true;
}
console.log(anagram("aaz", "zza"));
console.log(anagram("anagram", "nagaram"));





