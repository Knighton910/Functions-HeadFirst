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

function createDinnerOrder (passenger) {
    var dinnerFunc;

    if (passenger.ticket === "firstclass") {
        dinnerFunc = function () {
            alert("Would you like the Lobster & Beef soup or Shrimp Salad?");
        };
    } else {
        dinnerFunc = function () {
            alert("Would you like a lunchable or half a cold cut sandwhich?");
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
