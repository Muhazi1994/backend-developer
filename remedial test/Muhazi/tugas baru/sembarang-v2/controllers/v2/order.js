try {
    const { propFromIndex } = require('../../index')
}
catch(err) {
    console.log(err)
    // console.log(err.name)
    console.log('ada yang error somewhere')
}
finally {
    console.log('finished')
}



