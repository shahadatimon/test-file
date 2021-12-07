

const developers = [

    {
        name      : `shahadat`,
        skil      : `java`,
        location  : `khulna`,
        income    : 800,
    },
    {
        name      : `jillur`,
        skil      : `php`,
        location  : `dhaka`,
        income    : 1800,
    },
    {
        name      : `Hridoy`,
        skil      : `wordpress`,
        location  : `pabna`,
        income    : 500,
    },
    {
        name      : `swopnil`,
        skil      : `wordpress`,
        location  : `borishal`,
        income    : 200,
    },
    {
        name      : `Roni`,
        skil      : `python`,
        location  : `borishal`,
        income    : 300,
    },
    {
        name      : `imran`,
        skil      : `jango`,
        location  : `gopalgong`,
        income    : 700,
    },
    {
        name      : `Rumman`,
        skil      : `Laravel`,
        location  : `shafa`,
        income    : 600,
    },
    {
        name      : `Arman`,
        skil      : `Django`,
        location  : `perojpur`,
        income    : 500,
    },
    {
        name      : `Rakib`,
        skil      : `Golan`,
        location  : `khalishpur`,
        income    : 700,
    },
    {
        name      : `Reaz`,
        skil      : `Golan`,
        location  : `khalishpur`,
        income    : 300,
    },
     
];

let totle = 0;

developers.map((data) => {

    console.log(`
    Name      :  ${data.name}
    skil      :  ${data.skil}
    location  :  ${data.location}
    income    :  ${data.income}
    ==================================
    `);


    totle = totle + data.income;

});

console.log(`your totle income : ${totle}`);
