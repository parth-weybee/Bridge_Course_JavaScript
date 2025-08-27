const juliaData = [3, 5, 2, 12, 7];
const kateData =  [4, 1, 15, 8, 3];

const checkDogs  = (jul,kate=[])=>
{
    const data = [...jul,...kate];
    data.forEach((age,i)=>
    {
        console.log(`Dog number ${i+1} is an ${age<=3?"puppy":"adult"} and is ${age} years old`)
    })
}

const correctJuliaData = [...juliaData].slice(1,-2);

const mergeData = [...correctJuliaData,...kateData];

checkDogs(mergeData);