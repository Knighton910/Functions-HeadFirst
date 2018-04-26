
let passengerList = [
    { name: "Jane Doloop", paid: false, ticket: "coach" },
    { name: "Dr Evel", paid: true, ticket: "firstclass" },
    { name: "Sue Property", paid: true, ticket: "firstclass" },
    { name: "John Funcall", paid: false, ticket: "coach" }
];

function createDrinkOrder (passenger) {
    var orderFunc;

   if (passenger.ticket === "firstclass") {
       orderFunc = function () {
           alert("Would you like a cocktail or wine?");
       };
   } else {
       orderFunc = function () {
           alert("Your choice is cola or water");
       };
   }
   return orderFunc;
}

console.log("roll call");

function serveCustomer (passenger) {
    createDrinkOrder(passenger);
}

function servePassengers (passengers) {
    for (var i=0; i < passengers.length; i++) {
        serveCustomer(passengerList[i]);
    }
}


// noFlyList(passengerList);
//
// function noFlyList (list) {
//     for (let i = 0; i < list.length; i++) {
//         let passenger = list[i];
//         if (passenger.paid === false) {
//             list.pop();
//         } else if (passenger.paid === true) {
//             console.log("The Plane will being it's accent shortly, buckle up grandma");
//             return true;
//         }
//     }
//     console.log("Roll call: " + passengerList.name);
//     return false;
// }




// let tick = true;
//
// function ticker () {
//     if (tick) {
//         console.log("Tick");
//         tick = false;
//     } else {
//         console.log("Tock");
//         tick = true;
//     }
// }
// setInterval(ticker, 1000);
// clearTimeout(ticker);
//
// setTimeout(hellBoy, 2000);
//
// function logIt() {
//     console.log("Hey, I'm included too, yippie");
// }
// function hellBoy() {
//     console.log("I like beers & hate cats");
// }


// window.onload = init;
//
// function init () {
//     let map = document.getElementById("map");
//     map.mousemove = showCoords(event);
// }
//
// function showCoords (event) {
//     let map = document.getElementById("coords");
//     let x = event.clientX;
//     let y = event.clientY;
//
//     map.innerHTML = "Map coordinates: " + x + ", " + y;
// }


// window.onload = init;
//
// function init () {
//     let images = document.getElementsByTagName("img");
//     for (let i = 0; i < images.length; ++i) {
//         images[i].onclick = showAnswer;
//     }
// }
//
// function showAnswer (event) {
//     let image = event.target;
//     let name = image.id;
//     name = name + ".jpg";
//     image.src = name;
//
//     setTimeout(reblur, 2000, image);
//
// }
//
// function reBlur (image) {
//     let name = image.id;
//     name = name + "blur.jpg";
//     image.src = name;
// }
