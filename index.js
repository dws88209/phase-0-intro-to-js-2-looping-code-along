
// Code your solutions in this file
 const Cards = []

 function writeCards(Cards, event){
    const newarray = []
    for(let name = 0; name < Cards.length; name++) {
         newarray.push(`Thank you, ${Cards[name]}, for the wonderful ${event} gift!`);
         debugger;
    }
    return newarray;
 }
 writeCards(Cards);

 function countDown (i){
    while(i >= 0) {
    console.log(i);
    i--;
    }
}
 

