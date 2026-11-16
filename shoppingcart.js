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

cart = {};
videogameitems = [
  {
    name: "Huggy Wuggy Plushie",
    game: "Poppy's Playtime",
    gameType: "Horror",
    img: `HuggyWuggy.jpg`,
    cost: 25,
  },
  {
    name: "Granny's Bat",
    game: "Granny",
    gameType: "Horror",
    img: `Bat.jpg`,
    cost: 21,
  },
  {
    name: "Freddles",
    game: "FNAF 4",
    gameType: "Horror",
    img: `Freddles.jpg`,
    cost: 34,
  },
  {
    name: "Paper Bag Hat",
    game: "Little Nightmares",
    gameType: "Horror",
    img: `Paperbag.jpg`,
    cost: 12,
  },
  {
    name: "Jonesy's Rift Gun",
    game: "Fortnite",
    gameType: "Shooter",
    img: `Riftgun.jpg`,
    cost: 23,
  },
  {
    name: "Bacon Hair",
    game: "Roblox",
    gameType: "Sandbox",
    img: `Baconhair.jpg`,
    cost: 7,
  },
  {
    name: "Spike Plushie",
    game: "Brawl Stars",
    gameType: "Mobile",
    img: `Spike.jpg`,
    cost: 43,
  },
  {
    name: "Imposter",
    game: "Among Us",
    gameType: "Mystery",
    img: `Imposter.jpg`,
    cost: 38,
  },
  {
    name: "Bedrock",
    game: "Minecraft",
    gameType: "Sandbox",
    img: `Bedrock.jpg`,
    cost: 147,
  },
  {
    name: "Master Sword",
    game: "The Legend of Zelda",
    gameType: "Sandbox",
    img: `Mastersword.jpg`,
    cost: 58,
  },
  {
    name: "Leviathan Axe",
    game: "God of War Ragnarok",
    gameType: "Action",
    img: `Leviathanaxe.jpg`,
    cost: 93,
  },
  {
    name: "Energy Sword",
    game: "Halo",
    gameType: "Shooter",
    img: `Energysword.jpg`,
    cost: 67,
  },
  {
    name: "Portal Gun",
    game: "Portal",
    gameType: "Puzzle",
    img: `Portalgun.jpg`,
    cost: 102,
  },
  {
    name: "Poke Ball",
    game: "Pokemon",
    gameType: "Strategy",
    img: `Pokeball.jpg`,
    cost: 49,
  },
  {
    name: "Gravity Gun",
    game: "Half-Life 2",
    gameType: "Shooter",
    img: `Gravitygun.jpg`,
    cost: 137,
  },
  {
    name: "1-Up Mushroom",
    game: "Super Mario",
    gameType: "Platformer",
    img: `1upmushroom.jpg`,
    cost: 19,
  },
  {
    name: "Blue Shell",
    game: "Mario Kart",
    gameType: "Racing",
    img: `Blueshell.jpg`,
    cost: 54,
  },
  {
    name: "Kingdom Key",
    game: "Kingdom Hearts",
    gameType: "Action",
    img: `Kingdomkey.jpg`,
    cost: 84,
  },
  {
    name: "8 Mysterious Pages",
    game: "Slenderman",
    gameType: "Horror",
    img: `8pages.jpg`,
    cost: 16,
  },
  {
    name: "15 Rings",
    game: "Sonic the Hedgehog",
    gameType: "Platformer",
    img: `Ring.jpg`,
    cost: 37,
  },
  {
    name: "Nuka Cola",
    game: "Fallout",
    gameType: "Survival",
    img: `Nukacola.jpg`,
    cost: 13,
  },
  {
    name: "Alive Box",
    game: "Geomtery Dash",
    gameType: "Platformer",
    img: `Box.jpg`,
    cost: 9,
  },
  {
    name: "Red Ball",
    game: "Red Ball 4",
    gameType: "Platformer",
    img: `Redball.jpg`,
    cost: 5,
  },
  {
    name: "Small Meat Man",
    game: "Super Meat Boy",
    gameType: "Platformer",
    img: `Meatboy.jpg`,
    cost: 271,
  },
  {
    name: "Green Pig",
    game: "Angry Birds",
    gameType: "Puzzle",
    img: `Greenpig.jpg`,
    cost: 62,
  },
  {
    name: "Ink Jar",
    game: "Bendy and the Ink Machine",
    gameType: "Horror",
    img: `Inkjar.jpg`,
    cost: 72,
  },
  {
    name: "Peppermint Candy",
    game: "Cut the Rope",
    gameType: "Mobile",
    img: `Peppermint.jpg`,
    cost: 8,
  },
  {
    name: "Dummy",
    game: "Kick the Buddy",
    gameType: "Mobile",
    img: `Buddy.jpg`,
    cost: 69,
  },
  {
    name: "Hoverboard",
    game: "Subway Surfer",
    gameType: "Mobile",
    img: `Hoverboard.jpg`,
    cost: 52,
  },
  {
    name: "Hadouken Ability",
    game: "Street Fighters",
    gameType: "Fighting",
    img: `Hadouken.jpg`,
    cost: 71,
  },
];

total = 0;
checkout = "";
confirmation = "";

function inject() {
  const container = document.querySelector(".container");
  videogameitems.forEach((videogameitems) => {
    container.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
        <h2>${videogameitems.name}</h2>
        <p>$${videogameitems.cost}</p>
        <img src="${videogameitems.img}" alt="Image Didn't Load" </img>
        <button class="btn">Add To Cart</button>
        
      </div>`,
    );
  });
}
inject();
