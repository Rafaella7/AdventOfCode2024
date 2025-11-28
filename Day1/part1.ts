import * as fs from "fs";

const text = fs.readFileSync("Day1/data.txt", "utf-8");
const arr1: number[] = [];
const arr2: number[] = [];

const lines = text.trim().split("\n")

for (const line of lines) {
    const [a, b] = line.trim().split(/\s+/);  // trennt nach beliebig vielen Leerzeichen
    arr1.push(Number(a));
    arr2.push(Number(b));
}

let totaldis = 0;

arr1.sort();
arr2.sort();

console.log(arr1);
console.log(arr2);


for(let i=0; i<=arr1.length-1; i++){

    let distance = arr1[i] - arr2[i];
    if(distance < 0){
        distance = -(distance);
    }

    totaldis += distance;

}

console.log(totaldis);

