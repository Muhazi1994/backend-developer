function generateCodes (arr) {
    let output = []
    for (let types of arr) {
        let codes = []
        const { type, numOfRooms } = types
        for (let roomNum = 1; roomNum <= numOfRooms; roomNum++) {
            codes.push(`${type[0]}-${roomNum}`)
        }
        output.push({
            type,
            roomCodes: codes
        })
    }
    return output
}

const arr = [
    {
        type: 'standard', //'s-1'
        numOfRooms: 20
    },
    {
        type: 'luxury',
        numOfRooms: 10
    },
    {
        type: 'president',
        numOfRooms: 5
    }
]

const output = [
    {
        type: 'standard',
        roomCodes: [ 'code11', 'code22', 'code33' ]
    },
    {
        type: 'luxury',
        roomCodes: [ 'code1x', 'code2x', 'code3x' ]
    },
    {
        type: 'president',
        roomCodes: [ 'code1-', 'code2-', 'code3-' ]
    }
]



console.log(generateCodes(arr))