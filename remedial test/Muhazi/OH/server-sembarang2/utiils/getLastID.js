module.exports = {
    getLastID (arr) {
        const lastID = Math.max(...arr.map(x => x.id))
        return lastID
    }
}