const comments = [
    {text: 'Love this!', id: 523423},
    {text: 'Love!', id: 823423},
    {text: 'Hate this!', id: 543423},
    {text: 'Sure!', id: 523433},
    {text: 'WHYY!', id: 523323},
]
const people = [
    {age: 19, id: 523423},
    {age: 50, id: 823423},
    {age: 20, id: 543423},
    {age: 6, id: 523433},
    {age: 9, id: 523323},
]
// Array.prototype.some()  (at least one)

const isAdult = people.some(function(person) {
    if (person.age >= 19) {
        return true;
    } else {
        return false;
    }
});
const isAdult2 = people.some(person => (person.age >= 19));

console.log(isAdult);
console.log(isAdult2);

// Array.prototype.every()   (all)

const isEveryoneAdult = people.every(person => (people.age >= 19));

console.log("Is everyone adult?");

if (isEveryoneAdult == true) {
    console.log("YES! We are all adults");
} else {
    console.log("Nope");
}

// FIND if exists and return 
const comment = comments.find(comment => (comment.id == 523323));

console.log(comment);

// find something and tell where in array 
const commentIndex = comments.findIndex(comment => (comment.id === 523323));
console.table(comments);
console.log(commentIndex);

// NEW COMMENTS 

const newComments = [
    ...comments.slice(0, commentIndex),
    ...comments.slice(commentIndex + 1)
];
console.table(newComments);