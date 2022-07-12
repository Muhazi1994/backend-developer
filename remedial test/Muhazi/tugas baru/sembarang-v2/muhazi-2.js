const muh = [1,2,3,4,5,6,7,8,9,10]
console.log (muh.slice)
const sentences = 'satu dua tiga empat lima enam tujuh delapan sembilan sepuluh'
console.log (sentences.slice (16-56))

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
            data: 'Glints academy'
        }
    ]
}   
console.log(news.february[1]) 