/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  Window/Global: References on the highest level of the JS program.
-- in a function this applies to the global object
-- alone this applies to the global object

* 2.  Implicit Binding: Referencing the this. from inside an object. Therefore this. can only refer to the function within the object.
--Afunction receives an object as an arguement. 
--this. returns a different object each time it is run.

* 3. New Binding: Whenever an object is created and then returned by the constructor function.
-- A function that returns an object with the 'new' keyword.


* 4. Explicit Binding: Specifically binding with 'new' using .call and .apply
 .call and .apply can refer this to any object
*
* write out a code example of each explanation above
*/

// Principle 1

 //// code example for Window Binding
// function sayName(name) {
//     console.log(this);
//     return name;
// }
// sayName("Sheila");

// Principle 2

// code example for Implicit Binding

const client = {
    name: 'Mel',
    favVeg: function(vegtable) {
        console.log(`${this.name} favorite vegetable is ${vegtable}`);
    }
}

client.favVeg("Greens");

// Principle 3

// code example for New Binding

function KindHelloPerson(person) {
    this.greeting = 'Good Day '
    this.person = person;
    this.greet = function() {
        console.log(this.greeting + this. person);
    }
}
const fred = new KindHelloPerson('Barney');
const barney = new KindHelloPerson('Fred');

// fred.greet();
// barney.greet();
// Principle 4

// code example for Explicit Binding
const dino = new KindHelloPerson('Dino')
fred.greet.call(dino)
