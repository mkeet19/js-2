// var table = 1;

// while (table <= 12) {
//   console.log(table * 9);
//   table++;
// }

// for (var table = 1; table <= 12; table++) {
//   console.log(table * 9);
// }

// odd or even
// for (var i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log("this is even no.");
//   } else {
//     console.log("this is odd no.");
//   }
//   console.log(i);
// }

// var table = 1;

// while (table <= 12) {
//   console.log(table * 9);
//   table++;
// }

// for (var table = 1; table <= 12; table++) {
//   console.log("testing" * table);
//   if (table === 6) {
//     console.log("i hate the number  " + table);
//     break;
//   } else {
//     console.log(table * 9);
//   }
// }

// var favouriteFoods = [
//   "capsicum",
//   "brianjals",
//   "ladyfingers",
//   "beans",
//   "carrot"
// ];
// favouriteFoods[1] = "cheese";
// favouriteFoods.push("brijanals");

// favouriteFoods.push("cabbage");
// console.log(favouriteFoods);
// console.log(favouriteFoods.length);
// console.log(favouriteFoods[2]);

// var favouriteFoods = [
//   "capsicum",
//   "brianjals",
//   "ladyfingers",
//   "beans",
//   "carrot"
// ];
// for (var i = 0; i < favouriteFoods.length; i++) {
//   console.log(favouriteFoods[i]);
// }

var favouriterecipe = {
  recipeTitle: "noodle",
  recipeDescription: "this recipe is esay to made",
  ingredients: ["noodle", "spices", "water"],
  rating: 5,
  serving: "self-service",
  cooktime: 15,
  letsCook: function letsCook(recipe) {
    console.log("I'm hungry! let's cook " + recipe.recipeTitle);
  }
};

favouriterecipe.letsCook(favouriterecipe);

// function recipe(arr1) {
//   console.log("this is " + arr1.recipeTitle + " this is " + arr1.serving);
// }

// recipe(favouriterecipe);

// console.log(recipefavouriterecipe]);
// console.log(favouriterecipe);

// var ingredients = favouriterecipe["ingredients"];

// favouriterecipe.rating = "three star";

// favouriterecipe.serving = 3;

// delete favouriterecipe.cooktime;
// console.log(favouriterecipe);

// var movies = [
//   { name: "harry", rating: "4" },
//   { name: "junglebook", rating: "5" }
// ];
// for (var i = 0; i < movies.length; i++) {
//   var movie = movies[i];
//   console.log(movie.name + " is " + movie.rating + " rating");
// }
