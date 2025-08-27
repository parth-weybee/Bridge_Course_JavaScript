'use strict';

const dogAge =  [5, 2, 4, 1, 15, 8, 3];
const calcAvgHumanAge = (dogAge)=>
{
    return dogAge.map(age=>age<=2?2*age:16+age*4).filter(age=>age>18).reduce((acc,age,i,arr)=>
        {   console.log(age/arr.length);
            return acc+=age/arr.length},0);
}
console.log(calcAvgHumanAge(dogAge));