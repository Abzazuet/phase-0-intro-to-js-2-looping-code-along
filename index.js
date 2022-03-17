function writeCards(names, eventName){
    let message = '';
    const arr = [];
    for (let i in names){
        message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
        arr.push(message);
    }
    return arr;
}
function countDown(number){
    while (number>=0){
        console.log(number);
        number--;
    }
}
