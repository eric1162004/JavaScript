// the new keyword
// creates a new empty object {}
// sets the value of this to be the new empty object
// calls the cosntructor method

class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login() {
        console.log(this.email, "just logged in");
        return this;
    }
    logout() {
        console.log(this.email, "just logged out");
        return this;
    }
    updateScore() {
        this.score++;
        console.log(this.email, "score is now", this.score);
        return this;
    }
}

class Admin extends User {
    deleteUser(user) {
        users = users.filter(u => {
            return u.email != user.email;
        })
    }
}

var user1 = new User('eric@hotmail.com', 'eric');
var user2 = new User('eric2@hotmail.com', 'eric2');
// user1.login().updateScore().logout();

var admin = new Admin("peter@hotmail.com", "peter");
var users = [user1, user2];

// admin.deleteUser(user2);
// console.log(admin)




// ===== Old method of create Class and objects =======================

//creating a class using constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.gender = "M";

    //defining a function within the class
    this.greeting = function () {
        console.log(this.name, "says hello!");
    }
}

//defining a function at the class prototype and shared by all instances
Person.prototype.sayHello = function () {
    console.log(this.name, "says hello from prototype!");
}

//...args means to put all args into an array structure
function Manager(...args) {
    //grab all args, put them in array, then create an instance of that class with 'this' varible
    Person.apply(this, args);
    // exclusive features for the admin class
    this.role = 'super admin';
}

//inherit stuffs from the User.prototype
Manager.prototype = Object.create(User.prototype);

Manager.prototype.deleteUser = function (u) {
    persons = persons.filter(person => {
        return u.name != person.name;
    })
}

var person1 = new Person('eric', '27');
var manager1 = new Manager('peter@hotmail.com', '40');
var persons = [person1, manager1];
// person1.greeting();
// person1.sayHello();

// manager1.deleteUser(person1);
// console.log(persons);
