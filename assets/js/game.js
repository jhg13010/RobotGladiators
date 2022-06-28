//welcome to game
window.alert("Welcome to Robot Gladiators!");

//fight function setup
var fight = function(enemy) {
    //while enemy.health > 0 
    while(enemy.health > 0 && playerInfo.health > 0) {
        //fight conditions
        //subtract random damage from enemy.health and update enemy.health
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        console.log(damage);
        enemy.health = Math.max(0,enemy.health - damage);
        //console.log to confirm 
        console.log(
            playerInfo.name + " has attacked " + enemy.name + ". " + enemy.name + "'s heath updated to " + enemy.health + "."
            );
        //inform enemy.health 
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");
            playerInfo.money = playerInfo.money + 20;
            break;
        }
        else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        };
        //subtract random damage from playerInfo.health and update playerInfo.health
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
        console.log(damage);
        playerInfo.health = Math.max(0,playerInfo.health - damage);
        //console.log to confirm
        console.log(
            enemy.name + "has attacked " + playerInfo.name + ". " + playerInfo.name + "'s health updated to " + playerInfo.health + "."
            );
        //inform playerInfo.health
        if (playerInfo.health <= 0) {
            window.alert("I'm sorry " + playerInfo.name + "! You have died.");
            playerInfo.money=Math.max(0, playerInfo.money- 10);
            break;
        }
        else {
            window.alert("You are still alive! You have " + playerInfo.health + " health left.");
        };
    };
};

//call fight function and iterate through array 
var startGame = function() {
    //stat reset 
    playerInfo.reset();
    //fight loop
    for(var i=0; i < enemyInfo.length; i++) {
        var pickedEnemyObj = enemyInfo[i];
        pickedEnemyObj.health = randomNumber(40, 60);
        //ask to fight if health > 0
        if (playerInfo.health > 0) {
            var promptFight = window.prompt("Welcome to Round " + (i+1) + ". Do you want to fight, or skip for 2 BattleBucks? Enter 'FIGHT' or 'SKIP'.");
        //player dead notification if health < 0 
        } else {
            window.alert("I'm sorry" + playerInfo.name + "! You have died and cannot fight any longer.");
            break;
        };
        //indicate fight start 
        if (promptFight === "FIGHT" || promptFight === "fight") {
            // call fight function
            fight(pickedEnemyObj);
            if(playerInfo.health > 0 && i < enemyInfo.length - 1) {
                var shopConfirm = window.confirm("Great fight! Would you like to vist the shop?");
                if(shopConfirm) {
                shop();
                };
            };
        } else if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm selection
            var confirmSkip = window.confirm("Are you sure?");
                //deduct money
                if (confirmSkip) {
                    playerInfo.money = Math.max(0,playerInfo.money - 2);
                    window.alert("You have chosen to skip the fight. You now have " + playerInfo.money + " BattleBucks left.");
                    i = i++
                //proceed to fight
                } else {
                    fight(pickedEnemyName);
                };
        } else {
            window.alert("Please choose a valid option. Enter 'FIGHT' or 'SKIP'")
            };
    };
    endGame()
};

function endGame() {
    window.alert("The game has now ended. Let's see how your robot, " + playerInfo.name + " did.");
    //player wins
    if (playerInfo.health > 0) {
        window.alert("Great job, " + playerInfo.name + "! You ended with " + playerInfo.health + " health and " + playerInfo.money + " BattleBucks!");
        //player loses 
    } else {
        window.alert("I'm sorry, " + playerInfo.name + " has lost in battle!");
    };
    //ask for restart 
    var playAgainConfirm = window.confirm("Would you like to play again?");
    //yes ==> restart 
    if (playAgainConfirm) {
        startGame();
        //no ==> thanks for playing
    } else {
        window.alert("Thanks for playing, see you on the battlefield again soon!");
    };
};

var shop = function() {
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    //switch numbers 
    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
           if (playerInfo.money >= 7) {
                window.alert("Refilling " + playerInfo.name + "'s health by 20 for 7 BattleBucks.");
                playerInfo.health = playerInfo.health + 20;
                playerInfo.money = playerInfo.money - 7;
           } else {
            window.alert("I'm sorry, you do not have enought money.");
           };
           break;
        
        case "UPGRADE":
        case "upgrade":
            if (playerInfo.money >= 7) {
                window.alert("Updrading " + playerInfo.name + "'s attack capabilities by 6 for 7 BattleBucks.");
                playerInfo.attack = playerInfo.attack + 6;
                playerInfo.money = playerInfo.money - 7;
            } else {
                window.alert("I'm sorry, you do not have enought money.");
            };
            break;

        case "LEAVE":
        case "leave":
            window.alert("Exiting gladiator shop");
           //break to stop prompt
           break;
        
        default: 
            window.alert("You did not choose a viable option. Try again.");
            shop();
            break;
    };
};

//random number
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
};

var playerInfo = {
    //fetch user robot's name
    name: window.prompt("What is your robot's name?"),
    //setup initial attributes
    health: 100,
    attack: 10,
    money: 10,
    reset: function () {
        this.health = 100;
        this.attack = 10;
        this.money = 10;
    }
};

//enemy Setup
var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10,14)
    },
    {  
        name: "Amy Android",
        attack: randomNumber(10,14)
    },
    {
        name: "Robo Tumble",
        attack: randomNumber(10,14)
    }
];

startGame();



//GAME STATES
//"WIN" - player robot defeats all enemy robot
//  * fight all enemy robots
//  * defeat all enemy robots
//"LOSE" - player's robot hits 0 or less
//  * fight enemy robots 
//  * health reduced to 0 or less
//START GAME 
//END GAME
//  *Total stats
//  *play again
//      *yes ==> start game
//Skip 
//  *shop?
//      yes ==> shop function 
//          *refil health, upgrade attack, leave shop
//              *refill = - $, + pts
//              *attack = - $, + attack
//              *leave ==> leave 
//              *error ==> call shop again
//      no ==> normal