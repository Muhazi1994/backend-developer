// 0 - end: let i = 0; i < nums.length; i++
// 0 - half: let i = 0; i < Math.floor(nums.length / 2); i++
// half - end: let i = Math.floor(nums.length / 2); i < nums.length ; i++

// end - 0: let i = nums.length - 1; i >= 0 ; i--
// first half - 0: let i = Math.floor(nums.length / 2); i >= 0 ; i--
// end - first half: let i = nums.length - 1; i > Math.floor(nums.length / 2) ; i--

// ++: increment by 1; ++ is equal to += or + 1
// --: decrement by 1; -- is equal to -= or - 1

// assume you have a sorted array that contains a complete number from 1 to 20
// print all even number, in ascending order

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

// print out kelipatan 5, reverse order
// note: no logic di body loop

for (let i = nums.length -1; i >=0; i=+ 5) {


    
    /**
     *  things a loop must have, respectively:
     * - punya start pointer / counter / variable / value
     * - end condition: Boolean expression.
     * - increment pointer / counter / variable / value
     */
    console.log(nums[i])
}
