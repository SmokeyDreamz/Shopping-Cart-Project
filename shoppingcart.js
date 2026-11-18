/* We will be creating a project that allows users to browse items and add
them to a shopping cart. You may use any theme you want. This project will
be revisited several times (adding UI layer, advanced sorting methods) so
pick something you’re happy with. We will

Create a list of at least 20 items to sell                                        DONE!!!

Filter what products are shown with button clicks (clicks added later!)  

Allow users to add to a cart

Remove Items from cart

Provide users a total for their purchase

*Later
All items shown and filtered on screen

Shopping cart with add/remove buttons and total order price
 */

let cart = {};

let videogameitems = [
  {
    name: "Huggy Wuggy Plushie",
    game: "Poppy's Playtime",
    gameType: "Horror",
    img: "HuggyWuggy.jpg",
    cost: 25,
    stock: 5,
  },
  {
    name: "Granny's Bat",
    game: "Granny",
    gameType: "Horror",
    img: "Bat.jpg",
    cost: 21,
    stock: 8,
  },
  {
    name: "Freddles",
    game: "FNAF 4",
    gameType: "Horror",
    img: "Freddles.jpg",
    cost: 34,
    stock: 6,
  },
  {
    name: "Paper Bag Hat",
    game: "Little Nightmares",
    gameType: "Horror",
    img: "Paperbag.jpg",
    cost: 12,
    stock: 10,
  },
  {
    name: "Jonesy's Rift Gun",
    game: "Fortnite",
    gameType: "Shooter",
    img: "Riftgun.jpg",
    cost: 23,
    stock: 5,
  },
  {
    name: "Bacon Hair",
    game: "Roblox",
    gameType: "Sandbox",
    img: "Baconhair.jpg",
    cost: 7,
    stock: 12,
  },
  {
    name: "Spike Plushie",
    game: "Brawl Stars",
    gameType: "Mobile",
    img: "Spike.jpg",
    cost: 43,
    stock: 5,
  },
  {
    name: "Imposter",
    game: "Among Us",
    gameType: "Mystery",
    img: "Imposter.jpg",
    cost: 38,
    stock: 7,
  },
  {
    name: "Bedrock",
    game: "Minecraft",
    gameType: "Sandbox",
    img: "Bedrock.jpg",
    cost: 147,
    stock: 4,
  },
  {
    name: "Master Sword",
    game: "The Legend of Zelda",
    gameType: "Sandbox",
    img: "Mastersword.jpg",
    cost: 58,
    stock: 5,
  },
  {
    name: "Leviathan Axe",
    game: "God of War Ragnarok",
    gameType: "Action",
    img: "Leviathanaxe.jpg",
    cost: 93,
    stock: 3,
  },
  {
    name: "Energy Sword",
    game: "Halo",
    gameType: "Shooter",
    img: "Energysword.jpg",
    cost: 67,
    stock: 6,
  },
  {
    name: "Portal Gun",
    game: "Portal",
    gameType: "Puzzle",
    img: "Portalgun.jpg",
    cost: 102,
    stock: 4,
  },
  {
    name: "Poke Ball",
    game: "Pokemon",
    gameType: "Strategy",
    img: "Pokeball.jpg",
    cost: 49,
    stock: 8,
  },
  {
    name: "Gravity Gun",
    game: "Half-Life 2",
    gameType: "Shooter",
    img: "Gravitygun.jpg",
    cost: 137,
    stock: 3,
  },
  {
    name: "1-Up Mushroom",
    game: "Super Mario",
    gameType: "Platformer",
    img: "1upmushroom.jpg",
    cost: 19,
    stock: 10,
  },
  {
    name: "Blue Shell",
    game: "Mario Kart",
    gameType: "Racing",
    img: "Blueshell.jpg",
    cost: 54,
    stock: 6,
  },
  {
    name: "Kingdom Key",
    game: "Kingdom Hearts",
    gameType: "Action",
    img: "Kingdomkey.jpg",
    cost: 84,
    stock: 4,
  },
  {
    name: "8 Mysterious Pages",
    game: "Slenderman",
    gameType: "Horror",
    img: "8pages.jpg",
    cost: 16,
    stock: 10,
  },
  {
    name: "15 Rings",
    game: "Sonic the Hedgehog",
    gameType: "Platformer",
    img: "Ring.jpg",
    cost: 37,
    stock: 9,
  },
  {
    name: "Nuka Cola",
    game: "Fallout",
    gameType: "Survival",
    img: "Nukacola.jpg",
    cost: 13,
    stock: 10,
  },
  {
    name: "Alive Box",
    game: "Geometry Dash",
    gameType: "Platformer",
    img: "Box.jpg",
    cost: 9,
    stock: 8,
  },
  {
    name: "Red Ball",
    game: "Red Ball 4",
    gameType: "Platformer",
    img: "Redball.jpg",
    cost: 5,
    stock: 10,
  },
  {
    name: "Small Meat Man",
    game: "Super Meat Boy",
    gameType: "Platformer",
    img: "Meatboy.jpg",
    cost: 271,
    stock: 2,
  },
  {
    name: "Green Pig",
    game: "Angry Birds",
    gameType: "Puzzle",
    img: "Greenpig.jpg",
    cost: 62,
    stock: 6,
  },
  {
    name: "Ink Jar",
    game: "Bendy and the Ink Machine",
    gameType: "Horror",
    img: "Inkjar.jpg",
    cost: 72,
    stock: 5,
  },
  {
    name: "Peppermint Candy",
    game: "Cut the Rope",
    gameType: "Mobile",
    img: "Peppermint.jpg",
    cost: 8,
    stock: 12,
  },
  {
    name: "Dummy",
    game: "Kick the Buddy",
    gameType: "Mobile",
    img: "Buddy.jpg",
    cost: 69,
    stock: 5,
  },
  {
    name: "Hoverboard",
    game: "Subway Surfers",
    gameType: "Mobile",
    img: "Hoverboard.jpg",
    cost: 52,
    stock: 4,
  },
  {
    name: "Hadouken Ability",
    game: "Street Fighters",
    gameType: "Fighting",
    img: "Hadouken.jpg",
    cost: 71,
    stock: 5,
  },
];

let discounts = {
  GAME10: 10,
  SAVE20: 20,
  VIP30: 30,
};

let appliedDiscount = 0;
let currentFilter = "All";

// Show products
function inject() {
  let container = document.querySelector(".container");
  container.innerHTML = "";

  videogameitems.forEach((item, index) => {
    if (currentFilter === "All" || item.gameType === currentFilter) {
      container.innerHTML += `
        <div class="card">
          <h2>${item.name}</h2>
          <p>${item.game}</p>
          <p>$${item.cost}</p>
          <p>Stock: ${item.stock}</p>
          <img src="${item.img}" alt="${item.name}">

          ${
            item.stock === 0
              ? '<p class="out-of-stock">OUT OF STOCK</p>'
              : `<button class="btn" onclick="addToCart(${index})">
            Add To Cart
            </button>`
          }
        </div>
      `;
    }
  });
}

// Filter products
function filterProducts(type) {
  currentFilter = type;
  inject();
}

// Add to cart
function addToCart(index) {
  if (videogameitems[index].stock > 0) {
    if (!cart[index]) {
      cart[index] = 0;
    }

    cart[index]++;
    videogameitems[index].stock--;

    showPopup(videogameitems[index].name + " added to cart!");
  }

  inject();
  updateCart();
}

// Remove from cart
function removeFromCart(index) {
  cart[index]--;
  videogameitems[index].stock++;

  if (cart[index] === 0) {
    delete cart[index];
  }

  inject();
  updateCart();
}

// Calculate total
function calculateTotal() {
  let total = 0;

  for (let index in cart) {
    total += videogameitems[index].cost * cart[index];
  }

  return total;
}

// Update cart
function updateCart() {
  let shoppingCart = document.querySelector(".shopping-cart");
  shoppingCart.innerHTML = "<h2>Shopping Cart</h2>";

  for (let index in cart) {
    shoppingCart.innerHTML += `
      <div class="cart-item">
        <p>${videogameitems[index].name} x ${cart[index]}</p>
        <p>$${videogameitems[index].cost * cart[index]}</p>
        <button onclick="removeFromCart(${index})">Remove</button>
      </div>
    `;
  }

  let total = calculateTotal();
  let finalTotal = total - (total * appliedDiscount) / 100;

  shoppingCart.innerHTML += `
    <h3>Subtotal: $${total.toFixed(2)}</h3>
    <h3>Discount: ${appliedDiscount}%</h3>
    <h3>Total: $${finalTotal.toFixed(2)}</h3>
  `;
}

// Apply discount
function applyDiscount() {
  let code = document.querySelector("#discount-code").value.toUpperCase();
  let message = document.querySelector("#discount-message");

  if (appliedDiscount > 0) {
    message.innerHTML = "Only one discount can be used!";
  } else if (discounts[code]) {
    appliedDiscount = discounts[code];
    message.innerHTML = "Discount applied!";
  } else {
    message.innerHTML = "Invalid code!";
  }

  updateCart();
}

// Checkout
function checkout() {
  if (Object.keys(cart).length === 0) {
    alert("Your cart is empty!");
    return;
  }

  alert(
    "Purchase successful! Total: $" +
      (calculateTotal() * (1 - appliedDiscount / 100)).toFixed(2),
  );

  cart = {};
  appliedDiscount = 0;

  document.querySelector("#discount-code").value = "";
  document.querySelector("#discount-message").innerHTML = "";

  inject();
  updateCart();
}

inject();
updateCart();

function showPopup(message) {
  let popup = document.querySelector(".popup");

  popup.innerHTML = message;
  popup.classList.add("show");

  setTimeout(function () {
    popup.classList.remove("show");
  }, 1000);
}
