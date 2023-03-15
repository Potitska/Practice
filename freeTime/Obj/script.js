const groupA = [
    'FC Arsenal london',
    'FC Real Madrid',
    'FC Bayern munich',
    'FC Milan',
];
//
// function createTeamsForCalendarPage(teams) {
//     teams.forEach((item, index) =>{
//         const onlyClubName = item.split(" ")[1];
//         teams[index] = onlyClubName;
//     });
//     return teams;
// }
// const newArr = [...groupA];   // ... - це є спред оператор. він дозволяє нам не змінювати цей(groupA) масив, а тільки новий (newArr)
//
// console.log(createTeamsForCalendarPage(newArr));
// console.log(groupA)


//and one more but better option
function createTeamsForCalendarPage(teams) {
    return teams.map((item)=>item.split(' ')[1]);
}
console.log(createTeamsForCalendarPage(groupA));
console.log(groupA)