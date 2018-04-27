let passengerList = [
    { name: "Jane Doloop", paid: false, ticket: "coach", premium: true },
    { name: "Dr Evel", paid: true, ticket: "firstclass", premium: false },
    { name: "Sue Property", paid: true, ticket: "firstclass", premium: true },
    { name: "John Funcall", paid: false, ticket: "coach", premium: false }
];


function createDrinkOrder (passenger) {
    var orderFunc;

    if (passenger.premium === true && passenger.ticket === "firstclass") {
        orderFunc = function () {
            alert("Here's your complementary wine, would you like a cocktail with it?")
        };
    } else if (passenger.premium) {
        orderFunc = function () {
            alert("Would you like a cocktail or wine?");
        };
    } else if (passenger.premium === true && passenger.ticket !== "firstclass") {
        orderFunc = function () {
            alert("Here's your complementary wine, would you like a cola or water with it?")
        }
    } else {
        orderFunc = function () {
            alert("Your choice is cola or water");
        };
    }
    return orderFunc;
}


function createDinnerOrder (passenger) {
    var dinnerFunc;

    if (passenger.ticket === "firstclass") {
        dinnerFunc = function () {
            alert("Would you like Chicken or Pasta?");
        };
    } else if (passenger.premium === true) {
        dinnerFunc = function () {
            alert("would you like the Snackbox or cheese plate?");
        }
    } else {
        dinnerFunc = function () {
            alert("peanuts or pretzels? choose!");
        }
    }
    return dinnerFunc;
}


function enjoyMovie (passenger) {
    var movieFunc;

    if (passenger.ticket === "firstclass") {
        movieFunc = function () {
            alert("Would you like Bose Headphone & Trading places or just look up & enjoy the cinema: The Jerk on the big screen");
        };
    } else {
        movieFunc = function () {
            alert("enjoy the cinema: The Goonies on the big screen");
        }
    }
    return movieFunc;
}


console.log("roll call");


function serveCustomer (passenger) {
    var getDrinkOrderFunction = createDrinkOrder(passenger);
    var getDinnerFunc = createDinnerOrder(passenger);
    var getMovieFunc = enjoyMovie(passenger);
    getDrinkOrderFunction();
    getDinnerFunc();
    getMovieFunc();
}


function servePassengers (passengers) {
    for (var i=0; i < passengers.length; i++) {
        serveCustomer(passengerList[i]);
    }
}


console.log("roll call 2");

servePassengers(passengerList);
