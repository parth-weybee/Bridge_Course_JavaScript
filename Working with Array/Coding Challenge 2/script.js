'use strict';

const dogAge =  [5, 2, 4, 1, 15, 8, 3];
const calcAvgHumanAge = (dogAge)=>
{
    const dogHumanAge = dogAge.map((age)=>
    {
        return age<=2?2*age:16+age*4;
    })
    console.log(dogHumanAge);
    const filterDogs = dogHumanAge.filter(age=>age>18);
    const totalAge = filterDogs.reduce((acc,age,i)=>
    {
        return acc+=age;
    });
    console.log(filterDogs);
    return  totalAge/filterDogs.length;
}
console.log(calcAvgHumanAge(dogAge));
