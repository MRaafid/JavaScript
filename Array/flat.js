let a = [
    1,
    [2,3],
    ['sex', 
        ['M','F']
    ],
    ['age',
        ['minor',
            [13,12]
        ],
        ['adult',
            [21,23]
        ]
    ]
]
{
    let b = a.flat() // will remove 1 nested
    console.log(b)
}
{
    let b = a.flat(1) // will remove 1 nested
    console.log(b)    
}
{
    let b = a.flat(3) // will remove 1 nested
    console.log(b)    
}