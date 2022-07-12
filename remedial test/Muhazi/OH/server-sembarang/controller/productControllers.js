const name = 'sams'

exports.anotherProp = 'anotherProp'
module.exports = {
    _detailProduk: function getProductDetails () {
        console.log('Sampoerna 16 kretek')
    },
    _kumpulanProduk: function getProductList () {
        console.log('HP, LENOVO, MAC, ACER, DELL')
    },
    
    searchProductByName() {
        console.log('product found!!!!!')
    },
    deleteProduct() {
        console.log('product deleted!!!!!')
    },
    name
}
