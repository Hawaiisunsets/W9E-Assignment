// 10 arrays with objects for each element
let tweetObjects = [
    {
        tweet: `I'm gone be honest 20 mins into it, I just had to stop watching.`,
        username: `Lebron James`,
        createdAt: `11-07-2022`,
        age:38
    },
    {
        tweet: `KD ain't right!!! KILLER!`,
        username: `Lebron James`,
        createdAt: `11-06-2022`,
        age:38
    },
    {
        tweet: `Now when I need the rest I can't sleep!`, 
        username: `Lebron James`,
        createdAt: `11-05-2022`,
        age: 38
    },
    {
        tweet: `Go Zips!`,
        username: `Lebron James`,
        createdAt: `11-04-2022`,
        age: 38
    },
    {
        tweet: `Who knew all i needed was a LeBreakthrough.`,
        username: `Lebron James`,
        createdAt: `11-03-2022`,
        age: 38
    },
    {
        tweet: `Say it again and again!`,
        username: `Lebron James`,
        createdAt: `11-02-2022`,
        age: 38
    },
    {
        tweet: `JT Tuimoloau! Say that name again!`,
        username: `Lebron James`,
        createdAt: `11-01-2022`,
        age: 38
    },
    {
        tweet: `O-H!`,
        username: `Lebron James`,
        createdAt: `10-31-2022`,
        age: 38
    },
    {
        tweet: `I don't know Elon Musk and, tbh, I could care less who owns Twitter.`,
        username: `Kevin Durant`,
        createdAt: `10-30-2022`,
        age: 17
    },
    {
        tweet: `NFL fans, I got something special coming for y'all!`,
        username: `Kevin Durant`,
        createdAt: `10-29-2022`,
        age: 17
    },
    {
        tweet: `Jordan Poole is COLD!`,
        username: `Kevin Durant`,
        createdAt: `10-28-2022`,
        age: 17
    }
]


let counter = 0;

while (counter < tweetObjects.length){
    if (tweetObjects[counter][`age`] >= 18){
        // log tweet with square brackets after counter becaue inside of array
        console.log(tweetObjects[counter][`tweet`]);
        console.log(tweetObjects[counter][`username`]);
        console.log(tweetObjects[counter][`createdAt`]);
    }
    counter = counter +1;
}

for (let counter = 0; counter < tweetObjects.length; counter++){
    if (tweetObjects[counter][`age`] < 18){
        console.log(tweetObjects[counter][`tweet`]);
        console.log(tweetObjects[counter][`username`]);
        console.log(tweetObjects[counter][`createdAt`]);
    }
}