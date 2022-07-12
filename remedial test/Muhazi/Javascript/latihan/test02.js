function averagePair (a, b) {
    for (let i=0; i < a.length; i++) { // i++ ingrement
        for (let j = i+1; j< a.length; j++) { 
            let avg = (a[i]+a[j])/2;
            if (avg === b) {
                return true
            }
        }
    }
return false
}

console.log(averagePair([1,3,3,5,6,7,10,12,19],8)); 
console.log(averagePair([1,2,3], 2.5));
console.log(averagePair([-1,0,3,4,5,6], 4.1));
console.log(averagePair([1, 2, 5], 2));
/*
membuat function dengan dua paramater
    deklarasi i angka 0
    cek kondisi i looping pertama

    buat penampungan nilai j
    deklarasi j = i+i
    cek kondisi lopping kedua
    cek kondisi actions
    kondisi incerement

    deklarasi variable avg a[i]+a[j]/2
    jika variable avg sama dengan paramater b
    maka kita return true

    terakhir kita return boolean false

    


*/