// Add JavaScript below
let names = ['Adam', 'Reighleigh', 'Ashton', 'Jeff', 'Humphrey Sr. III', 'Emily', 'Athena', 'Herbert', 'Audrey', 'Wireless Dyson Vacuum Cleaner V2.4 with rechargable battery']

function RandomNumber(max){
    return Math.floor(Math.random() * max)
}

function GetRandomName(){
    let num = RandomNumber(10)
    return names[num];
}