var square = x => x * x;
console.log(square(9));

var user = {
    name: 'Erick',
    sayHi: () => {
        //console.log(arguments);
        console.log(`Hi ${this.name}`);
    },
    sayHiAlt () {
        //console.log(arguments);
        console.log(`Hi ${this.name}`);
    }
};

user.sayHi(1, 2, 3);
user.sayHiAlt(1, 2, 3);