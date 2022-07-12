// bubbleSort
/**
 * swap
 */


const unsorted = [6, 2, 3, 8, 3, 77, 3, 8, 43, 67]

// sort ascending
const bubbleSort = (arr, length, order = 'asc') => {
    if (!(['asc', 'dsc'].includes(order))) return 'order must be asc or dsc'

    for (let i=0; i < length; i++) {
        console.log(`iteration ${i + 1}`)
        for (let index = 0; index < length - 1; index++) {
            let currentValue = arr[index]
            let nextValue = arr[index + 1]
            console.log(`current: ${currentValue} next: ${nextValue}`)
            const orderFinal = order === 'asc' ? currentValue > nextValue : currentValue < nextValue

            if (orderFinal) {
                // only do swapping
                arr[index] = nextValue
                arr[index + 1] = currentValue
                console.log(`currentValue is ${order === 'asc' ? 'bigger' : 'lower'} than nextValue. swapping ${currentValue} with ${nextValue}`)
                console.log(arr)
                // only do swapping
            }
        }
    }
    return arr
}

console.log(bubbleSort(unsorted, 10, 'dsc'))