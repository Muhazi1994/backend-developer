/**
 * 
Louise joined a social networking site to stay in touch with her friends. The signup page required her to input a name and a password. However, the password must be strong. The website considers a password to be strong if it satisfies the following criteria:

- Its length is at least 6 character
- It contains at least one digit.
- It contains at least one lowercase English character.
- It contains at least one uppercase English character.
- It contains at least one special character. The special characters are: !@#$%^&*()-+
She typed a random string of length  in the password field but wasn't sure if it was strong. Given the string she typed, can you find the minimum number of characters she must add to make her password strong?

Note: Here's the set of types of characters in a form you can paste in your solution:
numbers = "0123456789"
lower_case = "abcdefghijklmnopqrstuvwxyz"
upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
special_characters = "!@#$%^&*()-+"

______ Function Description:

minimumNumber has the following parameters:
    - int n: the length of the password
    - string password: the password to test
 */



const minimumNumber = (n, password) => {
    // password: aA1! -> required 2 more char
    const rules = {
        numbers: {
            value: '0123456789',
            status: false
        },
        lowerCase: {
            value: 'abcdefghijklmnopqrstuvwxyz',
            status: false
        },
        upperCase: {
            value: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            status: false
        },
        special: {
            value: '!@#$%^&*()-+',
            status: false
        }
    }
    for (let char of password) {
        if (rules.numbers.value.includes(char)) {
            rules.numbers.status = true
            continue
        }
        if (rules.lowerCase.value.includes(char)) {
            rules.lowerCase.status = true
            continue
        }
        if (rules.upperCase.value.includes(char)) {
            rules.upperCase.status = true
            continue
        }
        if (rules.special.value.includes(char)) {
            rules.special.status = true
            continue
        }
    }
    const numOfCharRequiredByCharacter = Object.values(rules).filter(x => !x.status).length
    n += numOfCharRequiredByCharacter
    const numOfCharRequiredByLength = n < 6 ? 6 - n : 0
    return numOfCharRequiredByCharacter + numOfCharRequiredByLength
}

console.log(minimumNumber(5, 'aA1!x'))