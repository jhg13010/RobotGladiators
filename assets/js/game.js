//welcome to game
window.alert("Welcome to Robot Gladiators!");

//fetch user robot's name
var playerName = window.prompt("What is your robot's name?");
//setup initial attributes
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//enemy Setup
var enemyNames = ["Roborto", "Amy Android", "Robo Tumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//fight function setup
var fight = function(enemyName) {
    //while enemyHealth > 0 
    while(enemyHealth > 0 && playerHealth > 0) {
        //fight conditions
        //subtract playerAttack from enemyHealth and update enemyHealth
        enemyHealth = enemyHealth - playerAttack;
        //console.log to confirm 
        console.log(
            playerName + " has attacked " + enemyName + ". " + enemyName + "'s heath updated to " + enemyHealth + "."
            );
        //inform enemyHealth 
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            playerMoney = playerMoney + 20;
            break;
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        //subtract enemyAttack from playerHealth and update playerHealth
        playerHealth = playerHealth - enemyAttack;
        //console.log to confirm
        console.log(
            enemyName + "has attacked " + playerName + ". " + playerName + "'s health updated to " + playerHealth + "."
            );
        //inform playerHealth
        if (playerHealth <= 0) {
            window.alert("I'm sorry " + playerName + "! You have died.");
            break;
        }
        else {
            window.alert("You are still alive! You have " + playerHealth + " health left.");
        }
    }
}

//call fight function and iterate through array 
var startGame = function() {
    //stat reset 
    playerHealth=100;
    playerAttack=10;
    playerMoney=10;
    //fight loop
    for(var i=0; i < enemyNames.length; i++) {
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        //ask to fight if health > 0
        if (playerHealth > 0) {
            var promptFight = window.prompt("Welcome to Round " + (i+1) + ". Do you want to fight, or skip for 2 BattleBucks? Enter 'FIGHT' or 'SKIP'.");
        //player dead notification if health < 0 
        } else {
            window.alert("I'm sorry" + playerName + "! You have died and cannot fight any longer.");
            break;
        }
        //indicate fight start 
        if (promptFight === "FIGHT" || promptFight === "fight") {
            // call fight function
            debugger;
            fight(pickedEnemyName);
            if(playerHealth > 0 && i < enemyNames.length - 1) {
                var shopConfirm = window.confirm("Great fight! Would you like to vist the shop?");
                if(shopConfirm) {
                shop();
                }
            }
        } else if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm selection
            var confirmSkip = window.confirm("Are you sure?");
                //deduct money
                if (confirmSkip) {
                    playerMoney = playerMoney - 2;
                    window.alert("You have chosen to skip the fight. You now have " + playerMoney + " BattleBucks left. Would you like to shop instead?");
                    i = i++
                //proceed to fight
                } else {
                    fight(pickedEnemyName);
                }   
        } else {
            window.alert("Please choose a valid option. Enter 'FIGHT' or 'SKIP'")
            }
    }
    endGame()
}

function endGame() {
    window.alert("The game has now ended. Let's see how your robot, " + playerName + " did.");
    //player wins
    if (playerHealth > 0) {
        window.alert("Great job, " + playerName + "! You ended with " + playerHealth + " health and " + playerMoney + " BattleBucks!");
        //player loses 
    } else {
        window.alert("I'm sorry, " + playerName + " has lost in battle!");
    }
    //ask for restart 
    var playAgainConfirm = window.confirm("Would you like to play again?");
    //yes ==> restart 
    if (playAgainConfirm) {
        startGame();
        //no ==> thanks for playing
    } else {
        window.alert("Thanks for playing, see you on the battlefield again soon!");
    }
}

var shop = function() {
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    //switch numbers 
    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
           if (playerMoney >= 7) {
                window.alert("Refilling " + playerName + "'s health by 20 for 7 BattleBucks.");
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
           } else {
            window.alert("I'm sorry, you do not have enought money.");
           };
           break;
        
        case "UPGRADE":
        case "upgrade":
            if (playerMoney >= 7) {
                window.alert("Updrading " + playerName + "'s attack capabilities by 6 for 7 BattleBucks.");
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
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
    }
}

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