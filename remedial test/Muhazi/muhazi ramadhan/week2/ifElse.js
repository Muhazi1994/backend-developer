function getScore(value) {
    if (value >= 70) {
        return 'A';
    } else if (value >= 80) {
        return 'B';
    }
    else if (value >= 60) {
        return 'C';
    }
    else if (value >= 30) {
        return 'D';
    } else {
        return 'E';
    }
} 
console.log(getScore(75));
console.log(getScore(50));
console.log(getScore(25));