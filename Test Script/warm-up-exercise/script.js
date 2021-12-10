let listeVonPersonen = [
    {
        name: "Marc",
        job: "Student",
        geschlecht: "m",
        alter: 19,
        brille: true
    },
    {
        name: "Robin",
        job: "Student",
        geschlecht: "m",
        alter: 22,
        brille: false
    },
    {
        name: "Ronja",
        job: "Student",
        geschlecht: "w",
        alter: 20,
        brille: false
    }
];
for (let i = 0; i < listeVonPersonen.length; i++) {
    console.log(listeVonPersonen[i].name);
}
let nums = [2, 345, 34, 347, 1, 46];
let sum = 0;
for (let index = 0; index < nums.length; index++) {
    sum += nums[index];
}
console.log(sum);
//# sourceMappingURL=script.js.map