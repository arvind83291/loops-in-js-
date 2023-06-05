//loops

//#while loop
let i = 0;
while(i<=5){
    console.log("hello",i);
    i++;
} 
//decrement
let j = 50;

while(j>=0){
    console.log("hello",j);
    j--;
}

//for loop
for(let j=1; j<=5; j++)
{
    console.log("hi",j);

    for(let i=1;i<=5; i++){
        console.log("hello",i);
    }
}

for(let i = 1;i<=100;i++){
    if(i%5===0)
    console.log(i);
}
