"use strict";

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

const dogRecommendFood = () => {
  dogs.forEach((dog) => {
    dog.requireFood = dog.weight ** 0.75 * 28;
  });
};
dogRecommendFood();

const checkHowMuchEating = (owner) => {
  const dog = dogs.filter((dog) => {
    return dog.owners.includes(owner);
  });
  console.log(dog);
};

checkHowMuchEating("Sarah");
console.log(dogs);

const { ownersEatTooMuch, ownersEatTooLittle,ownersEatsFine } = dogs.reduce(
  (acc, dog) => {
    if(dog.curFood > dog.requireFood * 1.1)
    {
        acc.ownersEatTooMuch.push(dog);
    }
    else if(dog.curFood < dog.requireFood*0.9)
    {
        acc.ownersEatTooLittle.push(dog);
    }
    else{
        acc.ownersEatsFine.push(dog);
    }
    return acc;
  },
  {
    ownersEatTooMuch: [],
    ownersEatTooLittle: [],
    ownersEatsFine: []
  }
);

console.log(`${ownersEatTooMuch.flatMap(dog=>dog.owners).join(' and ')}  dogs eat too much!`);
console.log(`${ownersEatTooLittle.flatMap(dog=>dog.owners).join(' and ')}  dogs eat too little!`);

console.log(Boolean(dogs.find(dog=>dog.curFood = dog.requireFood)))
console.log(dogs.some(dog=>dog.curFood < dog.requireFood*1.1 && dog.curFood > dog.requireFood*0.9))

console.log(dogs.filter(dog=>dog.curFood < dog.requireFood*1.1 && dog.curFood > dog.requireFood*0.9))

const duplicateDogs = [...dogs];

duplicateDogs.sort((a,b)=>
{
    if(a.requireFood>b.requireFood)
        return 1;
    else
        return -1;
})
console.log(dogs);
console.log(duplicateDogs)