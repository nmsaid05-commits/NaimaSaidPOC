
 const foodDatabase = {
   foods: [
     { id: 1, name: "Pizza", price: 12.99 },
     { id: 2, name: "Burger", price: 8.99 },
     { id: 3, name: "Pasta", price: 14.99 },
     { id: 4, name: "Salad", price: 7.99 },
     { id: 5, name: "Sandwich", price: 6.99 }
   ],

   // Returns all five food items.
   getAll() {
     console.log("Getting all food items");
     return this.foods;
   }
 };

 // Export the shared database so the server can use it.
 module.exports = foodDatabase;
