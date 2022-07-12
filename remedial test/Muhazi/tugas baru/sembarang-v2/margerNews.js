const { resourceLimits } = require("worker_threads")

const majorNews = {
    january: [
        {
            date: 1,
            data: 'kucing kabur'
        }
    ],
    february: [
        {
            date: 2,
            data: 'Glints academy start'
        },
        {
            date: 1,
            data: 'pacar baru'
        }
    ],
    march: [
        {
            date: 10,
            data: 'motor baru'
        },
        {
            date: 1,
            data: 'pacar baru'
        },
        {
            date: 2,
            data: 'Glints academy start'
        }
    ],
    june: [
        {
            date: 15,
            data: 'rumah baru'
        },
        {
            date: 29,
            data: 'placement di singapore'
        }
    ],
    october: [
        {
            date: 5,
            data: 'rumah baru'
        },
        {
            date: 6,
            data: 'baju baru'
        },
        {
            date: 9,
            data: 'kucing baru'
        }
    ],
    december: [
        {
            date: 1,
            data: 'skip ngantor'
        },
        {
            date: 2,
            data: 'kerja kerja'
        },
        {
            date: 3,
            data: 'skip ngantor'
        },
        {
            date: 4,
            data: 'izin cuti'
        },
        {
            date: 10,
            data: 'cuti'
        },
        {
            date: 25,
            data: 'natalan'
        }
    ]
}

// const months = [
//     'january',
//     'februaty',
//     'march',
//     'may',
//     'juni',
//     'july',
//     'august',
//     'september',
//     'october',
//     'november',
//     'december'
// ]
// for (let i=0; i< months.length; i++) {
//     const tmp = majorNews[months[i]]
//     // console.log(tmp)
//     if (tmp) {
//         let max = tmp[0]
//         if(tmp.length > 1) {
//             for (let j=0; j < tmp.length; j++) {
//                 if (tmp[j].date > max.date) {
//                     max = tmp[j]
//                     // console.log(max)
//                 }
//             }
//         }
//         result.push(max.data)
//         // console.log(max.data)
//     }else {
//         result.push(null)
//     }
//     } 




// // bikin 1 array, 12 element. tiap elementnya adalah 1 bulan.
// // ambil berita di tanggal terakhir di tiap bulan.
// // kalo bulannya ga ada, array berisi null
// const expectedResult = [
//     'kucing kabur', 
//     'Glints academy start', 
//     'motor baru', 
//     null, 
//     null, 
//     'placement di singapore', 
//     null, 
//     null, 
//     null, 
//     'kucing baru', 
//     null, 
//     'natalan'
// ]

const expectedResult = [
    'kucing kabur', 
    'Glints academy start', 
    'motor baru', 
    null, 
    null, 
    'placement di singapore', 
    null, 
    null, 
    null, 
    'kucing baru', 
    null, 
    'natalan'
]


let months = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december'
]

const result = months.map( month => {
    const monthlyNews = majorNews[month]
    if (!monthlyNews) return null

    // get latest news
    let latestDate = 0
    let latestNews = ''
    for (let news of monthlyNews) {
        const { date, data } = news
        if (date > latestDate) {
            latestDate = date
            latestNews = data
        }
    }
    return latestNews
})
console.log(result)
