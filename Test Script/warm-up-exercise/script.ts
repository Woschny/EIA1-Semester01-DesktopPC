
interface Person {
    name: string;
    job: string;
    geschlecht: string;
    alter: number;
    brille: boolean;
}

let listeVonPersonen: Person[] = [
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

for (let i: number = 0; i < listeVonPersonen.length; i++) {
    console.log(listeVonPersonen[i].name);
}


let nums: number[] = [2, 345, 34, 347, 1, 46];

let sum: number = 0;

for (let index: number = 0; index < nums.length; index++) {
sum += nums[index];
}

console.log(sum);