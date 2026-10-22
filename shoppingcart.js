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





cart = {}
videogameitems = [
    {name: "Huggy Wuggy Plushie", game: "Poppy's Playtime", gameType: "Horror", cost: 25},
    {name: "Granny's Bat", game: "Granny", gameType: "Horror", cost: 21},
    {name: "Freddles", game: "FNAF 4", gameType: "Horror", cost: 34},
    {name: "Paper Bag Hat", game: "Little Nightmares", gameType: "Horror", cost: 12},
    {name: "Jonesy's Rift Gun", game: "Fortnite", gameType: "Shooter", cost: 23},
    {name: "Bacon Hair", game: "Roblox", gameType: "Sandbox", cost: 7},
    {name: "Spike Plushie", game: "Brawl Stars", gameType: "Mobile", cost: 43},
    {name: "Imposter", game: "Among Us", gameType: "Mystery", cost: 38},
    {name: "Bedrock", game: "Minecraft", gameType: "Sandbox", cost: 147},
    {name: "Master Sword", game: "The Legend of Zelda", gameType: "Sandbox", cost: 58},
    {name: "Leviathan Axe", game: "God of War Ragnarok", gameType: "Action", cost: 93},
    {name: "Energy Sword", game: "Halo", gameType: "Shooter", cost: 67},
    {name: "Portal Gun", game: "Portal", gameType: "Puzzle", cost: 102},
    {name: "Poke Ball", game: "Pokemon", gameType: "Strategy", cost: 49},
    {name: "Gravity Gun", game: "Half-Life 2", gameType: "Shooter", cost: 137},
    {name: "1-Up Mushroom", game: "Super Mario", gameType: "Platformer", cost: 19},
    {name: "Blue Shell", game: "Mario Kart", gameType: "Racing", cost: 54},
    {name: "Kingdom Key", game: "Kingdom Hearts", gameType: "Action", cost: 84},
    {name: "8 Mysterious Pages", game: "Slenderman", gameType: "Horror", cost: 16},
    {name: "15 Rings", game: "Sonic the Hedgehog", gameType: "Platformer", cost: 37},
    {name: "Nuka Cola", game: "Fallout", gameType: "Survival", cost: 13},
    {name: "Alive Box", game: "Geomtery Dash", gameType: "Platformer", cost: 9},
    {name: "Red Ball", game: "Red Ball 4", gameType: "Platformer", cost: 5},
    {name: "Small Meat Man", game: "Super Meat Boy", gameType: "Platformer", cost: 271},
    {name: "Green Pig", game: "Angry Birds", gameType: "Puzzle", cost: 62},
    {name: "Ink Jar", game: "Bendy and the Ink Machine", gameType: "Horror", cost: 72},
    {name: "Unstoppable Train Model", game: "GTA V", gameType: "Shooter", cost: 962},
    {name: "Peppermint Candy", game: "Cut the Rope", gameType: "Mobile", cost: 8},
    {name: "Dummy", game: "Kick the Buddy", gameType: "Mobile", cost: 69},
    {name: "Hoverboard", game: "Subway Surfer", gameType: "Mobile", cost: 52},
    {name: "Hadouken Ability", game: "Street Fighters", gameType: "Fighting", cost: 71},

]

total = 0
checkout = ""
confirmation = ""


function showItems(){
    videogameitems.forEach((videogameitems) => console.log(`${videogameitems.name} : $${videogameitems.cost}`));
}
showItems();



function addItems(item){
    found = false
    videogameitems.forEach(function(videogameitems){
        if (item === videogameitems.name){
            cart.push(item);
            found = true
        }
    })
    if (found === false){
            console.log(`${item} is an invalid item. Please look at the selection and pick a valid option.`)
        }
    return cart;
}
addItems("China");
addItems("Bedrock");
addItems("Dummy");
addItems("Red Ball");
addItems("Nigel");
addItems("Ethan");

/* function removeItems(item2,item){
    cart.forEach(function(cart){
        if (item2 === item)


    })

removeItems("Bedrock",item) */

console.log(cart);