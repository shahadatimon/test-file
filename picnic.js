

const allmember = [

    {
        name  : `shahadat`,
        taka  : 500
    },
    {
        name  : `redoy`,
        taka  : 300
    },
    {
        name  : `Rummman`,
        taka  : 400
    },
    {
        name  : `Arman`,
        taka  : 500
    },
    {
        name  : `Karima`,
        taka  : 500
    },
    {
        name  : `farjana`,
        taka  : 500
    },
    {
        name  : `karim`,
        taka  : 450
    },
    {
        name  : `Rakib`,
        taka  : 400
    },
    {
        name  : `Kusum`,
        taka  : 450
    },
    {
        name  : `Nasem`,
        taka  : 500
    },
];

let bokeya = 500 ;
let totle = 0;
allmember.map((data) => {

    console.log(`
    Member Name   : ${data.name}
    total taka    : ${data.taka}
    --------------------------------
    Bokeya taka    =  ${bokeya - data.taka}
    
    `);
    totle = totle + data.taka;
})
console.log(`Totle taka  = ${totle}`);