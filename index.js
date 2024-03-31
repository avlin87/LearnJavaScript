function sum(...args){
    if (args.length === 0) {
        return 'Please pass values to sum';
    }
    if (Array.isArray(args[0])){
        return args[0].reduce((a,b) => a + b);
    } 
    return args.reduce((a,b) => a + b);
}


console.log(sum([2,3,5]));
console.log(sum(11,1,4,2,3));


function sum1(){
    if (arguments.length === 0) {
        return 'Please pass values to sum';
    }
    if (Array.isArray(arguments[0])){
        return arguments[0].reduce((a,b) => a + b);
    } 
    return Array.from(arguments).reduce((a,b) => a + b);
}


console.log(sum1([2,3,5]));
console.log(sum1(11,1,4,2,3));