const fridge = ['botol'];

function isiAir4Liter() {
  console.log('isi air 5 liter menjadi 4 liter');
}

function checkbotolAvailability() {
  if (fridge.includes('botol')) {
    // console.log('The botol is exist');
    return true;
  }

  console.log("The botol doesn't exist");
  return false;
}

function isiBotol() {
  console.log('isi botol 3 liter full');
  console.log('masukan dalam botol 5 liter');
  console.log('isi kembali botol 3 liter full');
  console.log('botol air 3 liter di masukan dalam botol 5 liter')
  console.log('sisa air dalam botol 3 liter sebanyak 1 liter')
  console.log('buang air dalam botol 5 liter')
  console.log('satu liter air dalam botol 3 liter dituangkan dalam botol 5 liter')
  console.log('kembali isi full botol 3 liter dan tuangkan pada botol 5 liter')
  console.log('botol 5 liter kini berisi 4 liter')
}

function botolIsReady() {
  console.log('botol is ready');
}

function start() {
  isiAir4Liter();
  !checkbotolAvailability() && isiAir4Liter();
  isiBotol();
}

start();
