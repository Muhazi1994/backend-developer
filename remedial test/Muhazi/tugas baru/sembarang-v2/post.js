console.log("Pranidya Luigi");

const myEmptyArray = [];
const anotherArray = [1, `1`, null, undefined];

const sentences =
  "satu dua tiga empat lima enam tujuh delapan sembilan sepuluh";
const lastWord = sentences.split(" ");
console.log(lastWord.slice(5, 10));
console.log(lastWord[lastWord.length - 1]);

const majorNews = {
  january: [
    {
      date: 1,
      data: "kucing kabur",
    },
  ],
  february: [
    {
      date: 2,
      data: "Glints academy start",
    },
    {
      date: 1,
      data: "pacar baru",
    },
  ],
  march: [
    {
      date: 10,
      data: "motor baru",
    },
    {
      date: 1,
      data: "pacar baru",
    },
    {
      date: 2,
      data: "Glints academy start",
    },
  ],
  june: [
    {
      date: 15,
      data: "rumah baru",
    },
    {
      date: 29,
      data: "placement di singapore",
    },
  ],
  october: [
    {
      date: 5,
      data: "rumah baru",
    },
    {
      date: 6,
      data: "baju baru",
    },
    {
      date: 9,
      data: "kucing baru",
    },
  ],
  december: [
    {
      date: 1,
      data: "skip ngantor",
    },
    {
      date: 2,
      data: "kerja kerja",
    },
    {
      date: 3,
      data: "skip ngantor",
    },
    {
      date: 4,
      data: "izin cuti",
    },
    {
      date: 10,
      data: "cuti",
    },
    {
      date: 25,
      data: "natalan",
    },
  ],
};

const months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

const expectedResult = [];

for (let i = 0; i < months.length; i++) {
  if (majorNews[months[i]] !== undefined) {
    let tmpValue = majorNews[months[i]],
      maxData = tmpValue[0];

    if (tmpValue.length > 1) {
      for (let j = 1; j < tmpValue.length; j++) {
        if (tmpValue[j].date > maxData.date) {
          maxData = tmpValue[j];
        }
      }
    }

    expectedResult.push(maxData.data);
  } else {
    expectedResult.push(null);
  }
}

console.log(expectedResult);
