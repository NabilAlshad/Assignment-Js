//


//problem 1 

function kilometerToMeter(km) {
    if (km < 0) {
        return 'invalid '
    }
    else {
        var meter = km * 1000;

    }
    return meter;
}
var result1 = kilometerToMeter(6);
console.log(result1);

// problem 2   
function budgetCalculator(watch, phone, laptop) {
    if (watch <= 0) {
        console.log('invalid');
    }
    else {
        var costOfWatch = watch * 50;
    }
    if (phone <= 0) {
        console.log('invalid');
    }
    else {
        var costOfPhone = phone * 100;
    }
    if (laptop <= 0) {
        return 'invalid';
    }
    else {
        var costOfLaptop = laptop * 500;
    }

    var totalCost = costOfWatch + costOfPhone + costOfLaptop;
    return totalCost;
}
var result2 = budgetCalculator(20, 20, 30);
console.log(result2);

// problem 3

function hotelCost(day) {

    var totalCost = 0;
    var costOfTenDays = (10 * 100);
    var costOfTwentyDays = (10 * 80);



    if (day <= 10) {
        totalCost = day * 100;
    }
    else if (day > 10 && day < 20) {
        var costOfadditionDays = (day - 10) * 80;
        totalCost = costOfTenDays + costOfadditionDays;
    }
    else if (day > 20) {

        var overCostOfTwenty = (day - 20) * 50;

        totalCost = costOfTenDays + costOfTwentyDays + overCostOfTwenty;
    }

    return totalCost;

}
var result3 = hotelCost(23);
console.log(result3);


//problem 4
function megaFriend(names) {
    var name = "";
    for (var i = 0; i < names.length; i++) {
        if (name.length < names[i].length) {
            name = names[i];
        }
    }
    return name;
}
var result4 = megaFriend(['karimulalam', 'himu', 'jalillaa']);
console.log(result4);


