exports.today = () => {
    const today = new Date().toISOString().split('T')
    return today[0]
}