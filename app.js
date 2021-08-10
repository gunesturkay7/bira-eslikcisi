// const searchBeer = document.querySelector(".search-beer");
// const searchInput = document.querySelector(".search-input");
// const beerImgContainer = document.querySelector(".beer-img-container");
// const maltNames = document.querySelectorAll(".malt-name");

// searchBeer.addEventListener("click", (e) => {
//     e.preventDefault();
//     const beerId = searchInput.value;
//     const beerName = document.querySelector(".beer-name");
//     const beerImg = document.querySelector(".beer-img");
//     const searchId = function(beerId) {
//         fetch(`https:api.punkapi.com/v2/beers/${beerId}`)
//             .then((response) => response.json())
//             .then((data) => {
//                 beerImgContainer.innerHTML = `
//                     <img src="${data[0].image_url}" alt="" class="beer-img" />
//                          <h3 class="beer-name">${data[0].name}</h3>
//                          <div class="malt-name-wrapper"> </div>
//                          <div class="hops-name-wrapper">
//                          </div>
//                     `;
//                 const maltNameWrapper = document.querySelector(".malt-name-wrapper");
//                 data[0].ingredients.malt.forEach((malt) => {
//                     console.log(malt.name);
//                     maltNameWrapper.innerHTML += `

//                  <h2 class="malt-name">${malt.name}</h2>

//                  `;
//                 });
//                 const hopsNameWrapper = document.querySelector(".hops-name-wrapper");
//                 data[0].ingredients.hops.forEach((hops) => {
//                     console.log(hops.name);
//                     hopsNameWrapper.innerHTML += `

//                  <h2 class="hops-name">${hops.name}</h2>

//                  `;
//                 });
//                 const foodMatcher = document.querySelector(".food-matcher");

//                 console.log(data[0].food_pairing);
//                 data[0].food_pairing.forEach((food, i) => {
//                     foodMatcher.innerHTML += `
//                      <p class="match-food">
//                      <i class="fas fa-beer fa-3x"></i>
//                      <span class="food-name">${data[0].food_pairing[i]}</span>
//                       </p>
//                      `;
//                 });
//             });
//         const foodMatcher = document.querySelector(".food-matcher");
//         foodMatcher.innerHTML = "";
//     };

//     searchId(beerId);
// });
let newList = [];
let beerNamesArr = [];
let beerNamesFull = [];
const searchBeer = document.querySelector(".search-beer");
const searchInput = document.querySelector(".search-input");
const beerImgContainer = document.querySelector(".beer-img-container");
const maltNames = document.querySelectorAll(".malt-name");

const createAPI = function() {
    fetch("https://api.punkapi.com/v2/beers/")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            data.forEach((beer, i) => {
                beerNamesFull = beer.name + " ";

                const beerNamesArr = beerNamesFull.split(" ");
                newList.push(beerNamesArr.join(" ").trim());
            });
            console.log(newList);
        });
};

// const createNewList = function() {
//     return new Promise((resolve, reject) => {
//         const e = false;
//         if (!e) {
//             resolve();
//         } else {
//             reject();
//         }
//     });
// };
// createNewList().then((response) => createAPI());
createAPI();
searchBeer.addEventListener("click", function(e) {
    e.preventDefault();
    if (newList.includes(searchInput.value)) {
        console.log("YEAAH");

        fetch(`https:api.punkapi.com/v2/beers`)
            .then((response) => response.json())
            .then((data) => {
                const beerIndex = newList.indexOf(searchInput.value);
                console.log(data[beerIndex]);
                beerImgContainer.innerHTML = `
                    <img src="${data[beerIndex].image_url}" alt="" class="beer-img" />
                         <h3 class="beer-name">${data[beerIndex].name}</h3>
                         <div class="malt-name-wrapper"> </div>
                         <div class="hops-name-wrapper">
                         </div>
                    `;
                const maltNameWrapper = document.querySelector(".malt-name-wrapper");
                data[beerIndex].ingredients.malt.forEach((malt) => {
                    console.log(malt.name);
                    maltNameWrapper.innerHTML += `

                  <h2 class="malt-name">${malt.name}</h2>

                  `;
                });
                const hopsNameWrapper = document.querySelector(".hops-name-wrapper");
                data[beerIndex].ingredients.hops.forEach((hops) => {
                    console.log(hops.name);
                    hopsNameWrapper.innerHTML += `
                        <h2 class="hops-name">${hops.name}</h2>
                                  `;
                });
                const foodMatcher = document.querySelector(".food-matcher");

                console.log(data[0].food_pairing);
                data[beerIndex].food_pairing.forEach((food, i) => {
                    foodMatcher.innerHTML += `
                                     <p class="match-food">
                                     <i class="fas fa-beer fa-3x"></i>
                                     <span class="food-name">${data[beerIndex].food_pairing[i]}</span>
                                      </p>
                                     `;
                });
            });
        const foodMatcher = document.querySelector(".food-matcher");
        foodMatcher.innerHTML = "";
    } else {
        console.log("Olmadi");
    }
});

// CALLBACK FUNCTIONS
// const todos = [
//     { title: "Todo 1", description: "puresol bug temizliği" },
//     { title: "Todo 2", description: "oyun oyna" },
//     { title: "Todo 3", description: "yemek ye" },
// ];

// let todoListEl = document.querySelector("#todoList");

// function todoList() {
//     setTimeout(() => {
//         let todoItems = "";
//         todos.forEach((item) => {
//             todoItems += `
//                 <li>
//                     <b>${item.title}</b>
//                     <p>${item.description}</p>
//                 </li>
//             `;
//         });
//         todoListEl.innerHTML = todoItems;
//     }, 1000);
// }

// function newTodos(todo, callback) {
//     setTimeout(() => {
//         todos.push(todo);
//         callback();
//     }, 2000);
// }
// newTodos({
//         title: "Todo 4",
//         description: "annanesi ara",
//     },
//     todoList
// );

// PROMISE

// const todos = [
//     { title: "Todo 1", description: "puresol bug temizliği" },
//     { title: "Todo 2", description: "oyun oyna" },
//     { title: "Todo 3", description: "yemek ye" },
// ];
// let todoListEl = document.querySelector("#todoList");

// function todoList() {
//     setTimeout(() => {
//         let todoItems = "";
//         todos.forEach((item) => {
//             todoItems += `
//                 <li>
//                     <b>${item.title}</b>
//                     <p>${item.description}</p>
//                 </li>
//             `;
//         });
//         todoListEl.innerHTML = todoItems;
//     }, 1000);
// }

// function newTodos(todo) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             todos.push(todo);
//             const error = false;

//             if (!error) {
//                 resolve();
//             } else {
//                 reject("Hata var");
//             }
//         }, 2000);
//     });
// }
// newTodos({
//     title: "Todo 4",
//     description: "annanesi ara",
// }).then((response) => {
//     todoList();
// });

// const todos = [
//     { title: "Todo 1", description: "puresol bug temizliği" },
//     { title: "Todo 2", description: "oyun oyna" },
//     { title: "Todo 3", description: "yemek ye" },
// ];
// let todoListEl = document.querySelector("#todoList");

// const todoList = function() {
//     setTimeout(() => {
//         let todolar = "";
//         todos.forEach((todo) => {
//             todolar += `
//             <li>
//                 <b>${todo.title}</b>
//                 <p>${todo.description}</p>
//             </li>
//         `;
//         });
//         todoListEl.innerHTML = todolar;
//     }, 1000);
// };

// const newTodo = function(todo) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             todos.push(todo);
//             const error = false;
//             if (!error) {
//                 resolve();
//             } else {
//                 reject("Hata Var");
//             }
//         }, 2000);
//     });
// };
// newTodo({
//     title: "Todo 4",
//     description: "Anneni Ara!",
// }).then((response) => {
//     console.log("Yeni liste", todos);
//     todoList();
// });

// const p1 = Promise.resolve("p1");
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Ben 2. promisim");
//     }, 2000);
// });

// const p3 = 14021967;

// const p4 = fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
//     res.json()
// );

// Promise.all([p1, p2, p3, p4]).then((promises) => {
//     console.log(promises);
// });

// // ASYNC AWAIT

// async function fetchPosts() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();
// }
// fetchPosts();

// const fetchUsers = async function() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(response);
//     console.log(data);
//     data.forEach((user) => {
//         beerImgContainer.innerHTML += `${user.name} + ${user.email} </br>`;
//     });
// };
// fetchUsers();

// console.log("I");
// console.log(" eat");
// setTimeout(() => {
//     console.log("ice cream");
// }, 2000);
// console.log("with a");
// console.log("spoon");

let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

let isShopOpen = true;

// let order = (time, work) => {
//     return new Promise((resolve, reject) => {
//         if (isShopOpen) {
//             setTimeout(() => {
//                 resolve(work());
//             }, time);
//         } else {
//             reject(console.log("Our shop is closed!"));
//         }
//     });
// };
// order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
//     .then(() => {
//         return order(0000, () => {
//             console.log("Production has started");
//         });
//     })
//     .then(() => {
//         return order(2000, () => {
//             console.log("The food was chopped");
//         });
//     })
//     .then(() => {
//         return order(2000, () => {
//             console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`);
//         });
//     })
//     .then(() => {
//         return order(1000, () => {
//             console.log("Start the machine");
//         });
//     })
//     .then(() => {
//         return order(2000, () => {
//             console.log(`ice cream placed on ${stocks.holder[0]} `);
//         });
//     })
//     .then(() => {
//         return order(3000, () => {
//             console.log(`${stocks.toppings[0]} was selected`);
//         });
//     })
//     .then(() => {
//         return order(1000, () => {
//             console.log("Ice cream was served");
//         });
//     })
//     .catch(() => {
//         console.log("Customer Left");
//     })
//     .finally(() => {
//         console.log("Day ended, Our Shop is closed");
//     });

// let order = (fruitName, callProduction) => {
//     setTimeout(() => {
//         console.log(`${stocks.Fruits[fruitName]} was selected`);
//         callProduction();
//     }, 2000);
// };
// let production = () => {
//     setTimeout(() => {
//         console.log("Production has started");

//         setTimeout(() => {
//             console.log("Fruit has been chopped");

//             setTimeout(() => {
//                 console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

//                 setTimeout(() => {
//                     console.log("Machine has been started");
//                     setTimeout(() => {
//                         console.log(`${stocks.holder[0]} was choosed`);
//                         setTimeout(() => {
//                             console.log(`${stocks.toppings[1]} was selected`);
//                             setTimeout(() => {
//                                 console.log("Ice cream has been served");
//                             }, 2000);
//                         }, 3000);
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 2000);
//     }, 0000);
// };

// order(3, production);

let toppings_choice = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log("Which topping would you love ?"));
        }, 3000);
    });
};

async function kitchen() {
    console.log("a");
    console.log("b");
    console.log("c");
    await toppings_choice();
    console.log("d");
    console.log("e");
}
kitchen();
console.log("Cleaning the dishes");
console.log("Cleaning the tables");
console.log("Take another order");