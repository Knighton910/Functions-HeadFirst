function assert(value, desc) {
    let li = document.createElement("li");
    li.className = value ? "pass" : "fail";
    li.appendChild(document.createTextNode(desc));
    document.getElementById("results").appendChild(li);
}
window.onload = () => {
    assert(true, "The test suite is running.");
    assert(false, "Fail!");
} //  ----  end of testing section  ----


// Binding a specific context to an event handler
let btn = {
    clicked: false,
    click: function() {
        this.clicked = true;
        assert(btn.clicked, 'The btn has been clicked');
    }
};
let el = document.getElementById('test');
el.addEventListener('click', btn.click.bind(btn));

let boundFunc = btn.click.bind(btn);
assert(boundFunc != btn.click,
    'Calling bind creates a completely new func');


// Caveat: Arrow funcs & Obj literals
// assert(this === window, "this === window");
// let btn = {
//     clicked: false,
//     click: () => {
//         this.clicked = true;
//         assert(btn.clicked, 'The button has been clicked');
//         assert(this === window, 'In arrow func this === window');
//         assert(window.clicked, 'clicked is stored in window');
//     }
// }
//
// let el = document.getElementById('test');
// el.addEventListener('click', btn.click);


// -- Arrow functions are good for callback funcs
// function Button() {
//     this.clicked = false;
//     this.click = () => {
//         this.clicked = true;
//         assert(button.clicked, 'button has been clicked');
//     };
// }
//
// let button = new Button();
// let el = document.getElementById('test');
// el.addEventListener('click', button.click);


// function forEach(list, callback) {
//     for (let n = 0; n < list.length; n++) {
//         callback.call(list[n], n);
//     }
// }
// let weapons = [
//     {type:'shuriken'},{type: 'katana'}, {type: 'nunchucks'}
// ];
//
// forEach(weapons, function (index) {
//     assert(this === weapons[index],
//         'Got the expected value of ' + weapons[index].type);
// });


// function juggle() {
//     let result = 0;
//     for (var n = 0; n < arguments.length; n++) {
//         result += arguments[n];
//     }
//     this.result = result;
// }
//
// let ninja1 = {};
// let ninja2 = {};
//
// juggle.apply(ninja1,[1,2,3,4]);
// juggle.call(ninja2, 5,6,7,8);
//
// assert(ninja1.result === 10, 'juggled via apply');
// assert(ninja2.result === 26, 'juggled via call');

// function Button() {   all is vanity
//     this.clicked = false;
//     this.click = function() {
//         this.clicked = true;
//         assert(button.clicked, "The button has been clicked");
//         console.log(this.clicked);
//     };
// }
// let button = new Button();
// let el = document.getElementById('test');
// el.addEventListener('click', button.click);
// assert(button, "The button has not been click yet");

// function Ninja3() {
//     this.skulk = function() {
//         return this;
//     };
// }
// let whatever = Ninja3();
// whatever

// let puppet = {rules: false};
//
// function Emperor() {
//     this.rules = true;
//     return puppet;
// }
//
// let emperor = new Emperor();
//
// assert(emperor === puppet,
//     "The emperor is merely a puppet");
// assert(emperor.rules === false,
//     "The puppet does not know how to rule!");

// function Ninja() {
//     this.skulk = () => this
// }
//
// let ninja1 = new Ninja();
// let ninja2 = new Ninja();
//
// assert(ninja1.skulk() === ninja1, "The 1st ninja is skulking");
// assert(ninja2.skulk() === ninja2, "The 2nd ninja is skulking");
//
//
// function Ninja1() {
//     this.skulk = function() {
//         return true;
//     }
//     return 1;
// }
//
// assert(Ninja1() === 1,
//     "Return value honored when not called as a constructor");
//
// let miniNinja = new Ninja();
//
// assert(typeof miniNinja === "object",
//     "object return when called as a constructor");
// assert(typeof miniNinja.skulk === "function",
//     "ninja object has a skulk method");

// function whatsMyContext() { return this }
//
// assert(whatsMyContext() === window, "Function call on window");
//
// let ninja1 = { getMyThis: whatsMyContext };
//
// assert(ninja1.getMyThis() === ninja1, "Working with 1st ninja");
//
// let ninja2 = { getMyThis: whatsMyContext };
//
// assert(ninja2.getMyThis() === ninja2, "Working with 2nd ninja");
// let getMyThis = whatsMyContext;
//
// assert(getMyThis() === window, "Another function call in window");
//
// let ninja1 = { getMyThis: whatsMyContext };
//
// assert(ninja1.getMyThis() === ninja1, "Working with 1st ninja");
//
// let ninja2 = { getMyThis: whatsMyContext };
//
// assert(ninja2.getMyThis() === ninja2, "Working with 2nd ninja");


// let ninja = {};
// ninja.skulk = function(){console.log("Skulking like a boss")};
// ninja.skulk();

// function ninja() {
//     console.log(this);
// }
//
// function samurai() {
//     "use strict";
//     console.log(this);
// }
// //
// assert(ninja() === window, "In a 'nonstrict' ninja function, " + "the context is the global window object");
//
// assert(samurai() === undefined,
//     "in a 'strict' samurai function, " + "the context is undefined");

// "use strict"
// function infiltrate(person) {
//     assert(person === 'gardener', 'The person is a gardener');
//     assert(arguments[0] === 'gardener', 'The first argument is a gardener');
//     arguments[0] = 'ninja';
//     assert(arguments[0] === 'ninja', 'The first argument is now a ninja')
//     assert(person === 'gardener', 'The person is still a gardener');
//     infiltrate("gardener");
//
// }
//
// function skulk(name) {}
// function Ninja(name) {}
//
// skulk('Hattori');
// (function(who) { return who; })('Hattori');
//
// let ninja = { skulk: function(){} };
//
// ninja.skulk('Hattori');
// ninja = new Ninja('Hattori');
// skulk.call(ninja, 'Hattori');
// skulk.apply(ninja, ['Hattori']);

// function infiltrate(person) {
//   assert(person === 'gardener', 'The person is a gardener');
//   assert(arguments[0] === 'gardener', 'The first argument is a gardener');
//
//   arguments[0] = 'ninja';
//   assert(person === 'ninja', 'The person is a ninja now');
//   assert(arguments[0] === 'ninja', 'The first argument is a ninja');
//
//   person = 'gardener';
//   assert(person === 'gardener', 'The person is a gardener once more');
//   assert(arguments[0] === 'gardener', 'The first argument is a gardener again')
// }
//
// infiltrate("garderner");

// function whatever(a,b,c) {
//     assert(a === 1, 'The value of a is 1'); // #A
//     assert(b === 2, 'The value of b is 2'); // #B
//     assert(c === 3, 'The value of c is 3'); // #B
//     assert(arguments.length === 5, 'We`ve passed in 5 parameters'); //#C
//
//     assert(arguments[0] === a, 'The first argument is assigned to a'); // #D
//     assert(arguments[1] === b, 'The second argument is assigned to b'); // #D
//     assert(arguments[2] === c, 'The third argument is assigned to c'); // #D
//
//     assert(arguments[3] === 4, 'We can access the fourth argument'); // #E
//     assert(arguments[4] === 5, 'We can access the fifth argument'); // #E
// }
//
// whatever(1,2,3,4,5); // #F
//

// const values = [0,3,2,5,7,4,8,1];
// values.sort(function(value1,value2) {
//     return value2 - value1;
// });
//
// const values2 = [0,3,2,5,7,4,8,1];
// values.sort((value1,value2) => value2 = value1);
//
// // #A
// const greet = name => "Greetings " + name;
//
// assert(greet("Oishi") == "Greetings Oishi",
//     "Oishi is properly greeted");
//
// // #B
// let anotherGreet = function(name) {
//     return "Greetings " + name;
// }
//
// assert(anotherGreet("oishi") == "Greetings Oishi",
//     "Once more, Oishi is properly greeted");

// function myFuncDeclaration() {
//     function innerFunc(){}
// }
//
// let myFunc = function(){};
// myFunc(function(){});
//
// (function namedFuncExpression(){})();
//
// +function(){}();
// -function(){}();
// !function(){}();
// ~function(){}();

// let values = [0,3,2,5,7,4,8,1];
// values.sort((value1, value2) => {return value2 - value1;});
//
// (function samurai() {
//     alert("I'm a samurai!");
// })()
//
// function ninja() {
//     function hiddenNinja() {
//         alert("I'm a ninja!");
//     }
//     return hiddenNinja();
// }


//
// window.onload = () => {
//     assert(true, "The test suite is running.");
//     assert(false, "Fail!");
// }
//
// function sayHiToNinja(ninja) {
//     return "Hi " + ninja;
// }
// describe("Say Hi Suite", function() {
//    it("should hi to a ninja", function() {
//        expect(sayHiToNinja("Hatori")).toBe("Hi Hatori");
//    });
//    it("should fail", function() {
//        expect(false).toBe(true);
//     });
// });


// let text = 'Domo arigato!';
//
// function useless(callback) {
//     return callback();
// }
//
// assert(useless(() => {return text}) === text, "The useless function works! " + text );
// let passengerList = [
//     { name: "Jane Doloop", paid: false, ticket: "coach", premium: true },
//     { name: "Dr Evel", paid: true, ticket: "firstclass", premium: false },
//     { name: "Sue Property", paid: true, ticket: "firstclass", premium: true },
//     { name: "John Funcall", paid: false, ticket: "coach", premium: false }
// ];
//
//
// function createDrinkOrder (passenger) {
//     var orderFunc;
//
//     if (passenger.premium === true && passenger.ticket === "firstclass") {
//         orderFunc = function () {
//             alert("Here's your complementary wine, would you like a cocktail with it?")
//         };
//     } else if (passenger.premium) {
//         orderFunc = function () {
//             alert("Would you like a cocktail or wine?");
//         };
//     } else if (passenger.premium === true && passenger.ticket !== "firstclass") {
//         orderFunc = function () {
//             alert("Here's your complementary wine, would you like a cola or water with it?")
//         }
//     } else {
//         orderFunc = function () {
//             alert("Your choice is cola or water");
//         };
//     }
//     return orderFunc;
// }
//
//
// function createDinnerOrder (passenger) {
//     var dinnerFunc;
//
//     if (passenger.ticket === "firstclass") {
//         dinnerFunc = function () {
//             alert("Would you like Chicken or Pasta?");
//         };
//     } else if (passenger.premium === true) {
//         dinnerFunc = function () {
//             alert("would you like the Snackbox or cheese plate?");
//         }
//     } else {
//         dinnerFunc = function () {
//             alert("peanuts or pretzels? choose!");
//         }
//     }
//     return dinnerFunc;
// }
//
//
// function enjoyMovie (passenger) {
//     var movieFunc;
//
//     if (passenger.ticket === "firstclass") {
//         movieFunc = function () {
//             alert("Would you like Bose Headphone & Trading places or just look up & enjoy the cinema: The Jerk on the big screen");
//         };
//     } else {
//         movieFunc = function () {
//             alert("enjoy the cinema: The Goonies on the big screen");
//         }
//     }
//     return movieFunc;
// }
//
//
// console.log("roll call");
//
//
// function serveCustomer (passenger) {
//     var getDrinkOrderFunction = createDrinkOrder(passenger);
//     var getDinnerFunc = createDinnerOrder(passenger);
//     var getMovieFunc = enjoyMovie(passenger);
//     getDrinkOrderFunction();
//     getDinnerFunc();
//     getMovieFunc();
// }
//
//
// function servePassengers (passengers) {
//     for (var i=0; i < passengers.length; i++) {
//         serveCustomer(passengerList[i]);
//     }
// }
//
//
// console.log("roll call 2");
//
// servePassengers(passengerList);
