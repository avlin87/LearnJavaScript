walk();

function walk() {
    console.log('walk');
}

console.log(x);
let x = 1;

const run = function() {
    console.log('run');
};

const fast = run;

fast();