

const year = [

    {
        name  :  `shahadat`,
        year  :  22
    },
    {
        name  :  `Redoy`,
        year  :  18
    },
    {
        name  :  `Swopnil`,
        year  :  40
    },
    {
        name  :  `Sathi`,
        year  :  35
    },
    {
        name  :  `Soniya`,
        year  :  15
    },
    {
        name  :  `Arman`,
        year  :  17
    },
    {
        name  :  `Nayem`,
        year  :  25
    },
    {
        name  :  `Parvez`,
        year  :  45
    },
    {
        name  :  `Leton`,
        year  :  28
    },
    {
        name  :  `Rebul`,
        year  :  20
    },
    
];


function magic (year){
    

    if( year >= 0 && year < 18 ){
        year = `Sorry apner akhon boyos hoi nai`
    }else if(year >= 18 && year < 30 ){
        year = `Apnara koi selan taratare asan apnader jonnoi to ato aiojon`
    }else if(year >= 30 && year < 50 ){
        year = `apnader jonni to ato son kisu ampara apader beses manus`
    }
    
}

year.map( (data) => {
    console.log(`
    Your name  :  ${data.name}
    Your old   :  ${data.year}
    --------------------------------------
    Note  : ${year}
    
    `);
})