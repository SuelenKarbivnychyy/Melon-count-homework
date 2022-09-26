// """Take in a array and return a object of # of melons by melon type."""

let melonToAdd = ['Ogen', 'Horned Melon', 'Watermelon', 'Casaba',
                 'Sharlyn', 'Xigua', 'Ogen', 'Christmas', 'Christmas',
                 'Christmas', 'Christmas', 'Watermelon', 'Sharlyn', 'Xigua',
                 'Cantaloupe', 'Christmas', 'Watermelon', 'Christmas',
                 'Sharlyn', 'Christmas', 'Cantaloupe', 'Casaba', 'Cantaloupe',
                 'Santa Claus', 'Horned Melon', 'Watermelon', 'Ogen',
                 'Horned Melon', 'Cantaloupe', 'Xigua', 'Horned Melon', 'Sharlyn',
                 'Horned Melon', 'Sharlyn', 'Cantaloupe', 'Christmas',
                 'Horned Melon', 'Horned Melon', 'Horned Melon', 'Xigua', 'Xigua',
                 'Watermelon', 'Cantaloupe', 'Casaba', 'Cantaloupe', 'Casaba',
                 'Watermelon', 'Santa Claus', 'Casaba'];


function countMelons(melonList) {

    let melonInventory = {};

    for (let melon of melonList) {

        // if(melonInventory[melon])  // other way of checking if melon in melonInventory
        if (melon in melonInventory) {
            melonInventory[melon] +=1;            
        } else {
            melonInventory[melon] = 1;
        }
    }
    return melonInventory    
}

let result = countMelons(melonToAdd);
console.log(result); 