// The new "Avengers" movie has just been released! 
// There are a lot of people at the cinema box office standing in a huge line. 
// Each of them has a single 100, 50 or 25 dollar bill. 
// An "Avengers" ticket costs 25 dollars. 

// Can Vasya sell a ticket to every person and give change, 
// if he initially has no money and sells the tickets strictly in the order people queue?

function tickets(peopleInLine){
    sale = 'YES'
    twentyFive = 0
    fifty = 0
    hundred = 0
    ticket = 25
    peopleInLine.forEach( person => {
        if (person === ticket) { 
            twentyFive += 1
        } 
        if (person === 50) { 
            fifty += 1
            twentyFive -= 1 
        } 
        if (person === 100) {
            hundred += 1
            twentyFive -=1
            fifty > 0 ? fifty -= 1 : twentyFive -= 2
        } 
        if (twentyFive < 0 || fifty < 0 ) {
            console.log(twentyFive, fifty)
            sale = 'NO'
            return sale
        }
    })
    return sale
  }

console.log(tickets([25, 25, 50, 50]), "Answer: YES");
console.log(tickets([25, 100]), "Answer: NO");
console.log(tickets([25, 25, 50, 50, 100]), "Answer: NO"); 
console.log(tickets([25,50,25,100,25,25,50,100,25,50,25,100,25,50,25,100,25,25,25,100]), "Answer: yes"); 
console.log(tickets([25,50,25,100,25,25,50,100,25,25,50,100,25,25,50,100,25,50,50,50]), "Answer: NO"); 




// Simple but not the answer

// function tickets(peopleInLine){
//     sale = 'YES'
//     money = 0
//     ticket = 25
//     peopleInLine.forEach( person => {
//         person === ticket ? money += person : null
//         person != ticket && money >= (person - ticket) ? money = (money + person) - (person - ticket) : null
//         person != ticket && money < (person - ticket) ? sale = 'NO' : null
//     })
//     return sale
//   }

//   function tickets(peopleInLine){
//     sale = 'YES'
//     money = 0
//     ticket = 25
//     peopleInLine.forEach( person => {
//         person === ticket ? money += person : null
//         person != ticket && money >= (person - ticket) ? money = (money + ticket) - (person - ticket) : null
//         person != ticket && money < (person - ticket) ? sale = 'NO' : null
//     }) 
//     return sale
// }


// Revisit and Rework ! 

// function tickets(peopleInLine){
//     sale = 'YES'
//     money = []
//     ticket = 25
//     peopleInLine.forEach( person => {
//         // console.log('money1', money)
//         // console.log('peeps', person)
//         moneySum = money.reduce((x, y) => x + y, 0)
//         console.log(moneySum)
//         console.log(money)
//         person === ticket ? money.push(person) & console.log(money) : null
//         person != ticket && moneySum >= (person - ticket) && (person-ticket) > 50 ? money.push(person) &  & console.log('R', person - ticket , money.find((person, ticket) => person - ticket), money.splice(money.findIndex( () => person - ticket), money.findIndex(() => person - ticket) + 1)) : null
//         person != ticket && moneySum < (person - ticket) ? sale = 'NO' : null
//         // console.log('money2', money)
//         // console.log('sale', sale)
//     })
//     return sale
//   }

