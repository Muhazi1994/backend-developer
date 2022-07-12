// 1. get string enam to sepuluh
const sentences = 'satu dua tiga empat lima enam tujuh delapan sembilan sepuluh'
const angkaLiteral = sentences.split(' ')
const result = angkaLiteral.slice(5, angkaLiteral.length)


// 2. get berita from february 2nd
const news = {
    january: [
        {
            date: 1,
            data: 'kucing kabur'
        },
        {
            date: 2,
            data: 'kucing baru'
        },
        {
            date: 3,
            data: 'kucing kelaparan'
        }
    ],
    february: [
        {
            date: 1,
            data: 'pacar baru'
        },
        {
            date: 2,
            data: 'Glints academy start'
        },
        {
            date: 3,
            data: 'Glints academy end'
        }
    ]
}
const getHeadline = (data, month, date ) => {
    const result = data[month].filter( news => news.date == date)[0].data
    return result
}
console.log(getHeadline(news, 'february', 2))