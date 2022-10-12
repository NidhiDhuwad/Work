// Question-2 Start
let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
function length() {
    alert(fruits.length);
}
// Question-2 End
// --------------------------------------------------------------------------------
// Question-3 Start
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map(item => item.name);

function maptonames() {
    alert(names); // John, Pete, Mary
}
// Question-3 End
// --------------------------------------------------------------------------------
// Question-4 Start
let johns = { name: "johns", surname: "Smith", id: 1 };
let peter = { name: "Pete", surname: "Hunt", id: 2 };
let marys = { name: "Mary", surname: "Key", id: 3 };

let userss = [johns, pete, mary];

let usersMapped = userss.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));

function maptoobject() {
    alert(usersMapped[0].id); // 1
    alert(usersMapped[0].fullName); // John Smith
}

// Question-4 End
// --------------------------------------------------------------------------------
// Question-5 Start
function sumSalaries(salaries) {

    let sum = 0;
    for (let salary of Object.values(salaries)) {
        sum += salary;
    }

    return sum; // 650
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function salary() {
    alert(sumSalaries(salaries)); // 650
}
// Question-5 End
// --------------------------------------------------------------------------------
// Question-6 Start
let user = {
    fname: "John",
    years: 30
};

let { fname, years: age, isAdmin = false } = user;

function aname() {
    alert(fname); // John
};
function Age() {
    alert(age); // 30
};
function property() {
    alert(isAdmin); // false
};
// Question-6 End
// --------------------------------------------------------------------------------
// Question-7 Start
let person = {
    name: "Johns",
    age: 31,

    toString() {
        return `{name: "${this.name}", age: ${this.age}}`;
    }
};

function read() {
    alert(person); // {name: "John", age: 30}
}
// Question-7 End