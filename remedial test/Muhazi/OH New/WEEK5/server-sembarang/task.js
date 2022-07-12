/**
 * 
 * bikin model produk
 * requirement:
 * 
 * product punya id, name, price, variant (FK)
 * beberapa produk punya variant, beberapa tidak
 * 
 * 
 * variant: Type dan Values
 * Type: warna, ukuran, bahan
 * Values: merah, putih, L, XL, S, cotton, etc
 * setiap varian punya HARGA DAN STOK MASING2 !!!!
 * 
 * bikin 1 endpoint untuk get produk detail
 * get /product/:product_id
 * 
 * kalo ga punya varian: 
 *  id: 1,
 *  name: 'kaos kw',
 *  stock: 99,
 *  price: 23000
 * 
 * kalo punya varian: 
 *  
 */

// gapnya varian

const data_ = {
    id: 1,
    name: 'sepatu',
    price: 99999,
    stock: 99
}
// punya variant 1 tipe
const data = {
    id: 2,
    name: 'kaos wkwkwk',
    variants: [
        {
            id: 1,
            name: 'XL',
            stock: 99,
            price: 23000
        },
        {
            id: 2,
            name: 'L',
            stock: 9,
            price: 20000
        }
    ]
}
// punya variant 2 tipe
const data2 = {
    id: 2,
    name: 'kaos wkwkwk',
    variants: [
        {
            id: 1,
            name: 'White - XL',
            stock: 99,
            price: 23000
        },
        {
            id: 2,
            name: 'White - L',
            stock: 99,
            price: 23000
        },
        {
            id: 3,
            name: 'Black - XL',
            stock: 99,
            price: 23000
        },
        {
            id: 4,
            name: 'Black - L',
            stock: 99,
            price: 23000
        },
    ]
}