var _ = require('lodash');
var members = [
    { name: 'Laveesh Gupta', age: 20 },
    { name: 'Yash Jangid', age: 40 },
    { name: 'Firoz Khan', age: 41 },
    { name: 'Amrit Srivastava', age: 17 },
    { name: 'Chandraprakash Sharma' },
    { name: 'Swpril Ahuja', age: 45 },
    { name: 'Yogesh Khatri', age: 51 }
];
//   Ques 1
var res = _.map(members, function get(value) {
    var names = _.split(value.name, " ", 2);
    console.log(names[0]);
    return names;
});
// Ques 2 : Make everyone's last names in UPPERCASE in given array of objects
var res = _.map(members, function get(value) {
    var names = value.name;
    var lastindex = names.split(' ');
    var x = lastindex[0];
    var y = lastindex[1].toLocaleUpperCase();
    var ans = x + ' ' + y;
    console.log(ans);
});
// Ques 3 : Get entries where age is between 41-60
var res = _.map(members, function get(value) {
    if (value.age >= 41 && value.age <= 60) {
        console.log(value);
    }
});
// Ques 4 : Get average age
var arr = 0;
var res = _.map(members, function get(value) {
    if (value.age != undefined) {
        arr += value.age;
    }
});
console.log(arr / 2);
// Ques 5 :  Get Person with maximum age
var res = _.reduce(members, function sum(acc, value) {
    if (value.age > acc) {
        return value.age;
    }
    else {
        return acc;
    }
}, -Infinity);
console.log(res);
// Ques 6 : Divide persons in three groups, result should look like
// {
//   'young': [],
//   'old': [],
//   'noage': []
// }
// Less than 35yrs is young, above 35 is old
var arr1 = [];
var arr2 = [];
var arr3 = [];
var res = _.map(members, function get(value) {
    if (value.age < 35) {
        arr1.push(value);
    }
    else if (value.age > 35) {
        arr2.push(value);
    }
    else {
        arr3.push(value);
    }
});
var obj = {
    young: arr1,
    old: arr2,
    noage: arr3
};
console.log(obj);
// Ques 7 : add a new member to same members array instance at index 2
var count = 0;
Object.keys(members).forEach(function (key) {
    count = count + 1;
    if (count == 2) {
        _.set(members[key], 'status', 'true');
    }
});
console.log(members);
// Ques 8 : extract first and second element using destructing
var count = 0;
var res = _.map(members, function enets(value) {
    count++;
    if (count <= 2) {
        console.log(value);
    }
});
// Ques 9 : Create a new array instance adding a new member at index 0, and keeping existing afterwards
var newobj = _.clone(members);
var count = 0;
Object.keys(newobj).forEach(function (key) {
    count++;
    if (count == 1) {
        _.set(newobj[key], 'status', 'true');
    }
});
console.log(newobj);
// Ques 10 : Extract properties of object using destructuring
var res = _.each(members, function (value) {
    console.log(value.name);
    console.log(value.age);
});
// Ques 11 :  Rename extracted property of object while destructing
Object.keys(members).forEach(function (key) {
    members[key].info = members[key].name;
    delete members[key].name;
});
console.log(members);
// Ques 12 : Destructure any property of an object and use spread operator to get remaining properties in an object
var obj1 = [];
Object.keys(members).forEach(function (key) {
    obj1.push(members[key].name);
    obj1.push(members[key].age);
});
console.log.apply(console, obj1);
// Ques 13 : Create a new object by copying using spread operator, override one of the properties to assign a new value in the same step
var newobj = _.clone(members);
Object.keys(newobj).forEach(function (key) {
    _.set(newobj[key], 'status', 'true');
});
console.log(newobj);
// Ques 14 : Use reduce function on array and object
var arra = [1, 2, 3, 4, 5];
var res = _.reduce(arra, function sum(acc, value) {
    return acc + value;
}, 0);
console.log(res);
var newob = [
    {
        prod_name: "A",
        price: 2300
    },
    {
        prod_name: "B",
        price: 200
    },
    {
        prod_name: "C",
        price: 2100
    },
];
var res = _.reduce(newob, function sum(acc, value) {
    return acc + value.price;
}, 0);
console.log(res);
