// Kilometer-to-meter
kilometerInput = 5;
function kilometerToMeter() {
  return kilometerInput * 1000;
}
var result = kilometerToMeter();
console.log(result);

// Budgetcalculator
function budgetCalculator(watch, phone, laptop) {
  return watch * 50 + phone * 100 + laptop * 500;
}
var result = budgetCalculator(3, 5, 2);
console.log(result);

// Hotel-Cost
function hotelCost(day) {
  if (day <= 10) {
    console.log(day * 100);
  } else if (day > 10 && day < 20) {
    console.log(1000 + (day - 10) * 80);
  } else {
    console.log(1800 + (day - 20) * 50);
  }
}
hotelCost(30);

// MegaFriend
function megaFriend(str) {
  var names = str.split(" ");
  var longest = "";
  for (var name of names) {
    if (name.length > longest.length) longest = name;
  }
  return longest;
}
var result = megaFriend(
  "NurEallhi MahibMridha NaziaHossain NurEjannat Kamaluddin FarihaShujat TabitaHossain AdibMridha SadatAlYasir"
);
console.log(result);
