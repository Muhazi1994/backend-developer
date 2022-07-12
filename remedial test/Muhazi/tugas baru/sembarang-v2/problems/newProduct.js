const models = [
    {
        id: '1',
        type: 'Size',
        options: [
            {
                name: 'M',
                id: '_1'
            },
            {
                name: 'L',
                id: '_2'
            },
            {
                name: 'XL',
                id: '_3'
            },
            {
                name: 'XXL',
                id: '_4'
            }
        ]
    },
    {
        id: '2',
        type: 'Color',
        options: [
            {
                name: 'White',
                id: '_11'
            },
            {
                name: 'Black',
                id: '_22'
            },
            {
                name: 'Yellow',
                id: '_33'
            }
        ]
    }
]

const details = [
    {
        variant: 'White-M',
        stock: 9999,
        price: 50000
    },
    {
        variant: 'White-L',
        stock: 9999,
        price: 50000
    },
    {
        variant: 'White-XL',
        stock: 9999,
        price: 50000
    },
    {
        variant: 'White-XXL',
        stock: 9999,
        price: 50000
    },
    {
        variant: 'Black-M',
        stock: 9999,
        price: 50000
    },
    {
        variant: 'Black-L',
        stock: 9999,
        price: 50000
    },
    {
        variant: 'Black-XL',
        stock: 9999,
        price: 50000
    },
    {
        variant: 'Black-XXL',
        stock: 9999,
        price: 50000
    },
    {
        variant: 'Yellow-M',
        stock: 9999,
        price: 50000
    },
    {
        variant: 'Yellow-L',
        stock: 9999,
        price: 50000
    },
    {
        variant: 'Yellow-XL',
        stock: 9999,
        price: 50000
    },
    {
        variant: 'Yellow-XXL',
        stock: 9999,
        price: 50000
    }
]

/**
 * add key "code" to details.
 * code is generated following this rules:
 *      <id of type variant1>.<id of option.name variant1>:<id of type variant2>.<id of option.name variant2>
 * 
 * e.g:
 * 
 * code for variant: 'White-M' is 2._11:1._1
 * then, add new code to the obj 
 * {
        variant: 'White-M', ---> variant: 'variant1-variant2'
        stock: 9999,
        price: 50000,
        code: '2._11:1._1'
    },
 */