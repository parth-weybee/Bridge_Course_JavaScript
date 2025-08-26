'use strict';

const gameEvents = new Map([
 [17, '⚽ GOAL'],
 [36, '� Substitution'],
 [47, '⚽ GOAL'],
 [61, '� Substitution'],
 [64, '� Yellow card'],
 [69, '� Red card'],
 [70, '� Substitution'],
 [72, '� Substitution'],
 [76, '⚽ GOAL'],
 [80, '⚽ GOAL'],
 [92, '� Yellow card'],
 ]);
 const gameUniqueEvents = [...new Set([...gameEvents.values()])];
 console.log(gameUniqueEvents);


 console.log(gameEvents);
 gameEvents.delete(64);
 console.log(gameEvents);

 const time = [...gameEvents.keys()].pop();
 console.log(time/gameEvents.size);
 
 for(const [key,value] of gameEvents)
 {
      console.log(`Time-${key} Event- ${value} ${key<=45?"First Half":"Second Half"}`)
 }