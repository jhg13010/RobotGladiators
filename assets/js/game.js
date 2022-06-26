//welcome to game
window.alert("Welcome to Robot Gladiators!");

//fetch user robot's name
var playerName = window.prompt("What is your robot's name?");

//setup initial attributes
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//starting status
console.log(playerName, playerHealth, playerAttack, playerMoney);

//enemy Setup
var enemyNames = ["Roborto", "Amy Android", "Robo Tumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//enemy starting status
console.log(enemyNames, enemyHealth, enemyAttack);
console.log(enemyNames.length);
for (var i=0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
}

var fight = function() {
    //ask to fight
    var promptFight = window.prompt("Do you want to fight, or skip for 2 BattleBucks? Enter 'FIGHT' or 'SKIP'.");

    //fight conditions
    if (promptFight === "FIGHT" || promptFight === "fight") {
        //alert players of start
        window.alert("3...2...1...FIGHT!");

        //subtract playerAttack from enemyHealth and update enemyHealth
        enemyHealth = enemyHealth - playerAttack;
        //console.log to confirm 
        console.log(
            playerName + " has attacked " + enemyName + ". " + enemyName + "'s heath updated to " + enemyHealth + "."
            );
        //inform enemyHealth 
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
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
        }
        else {
            window.alert("You are still alive! You have " + playerHealth + " health left.");
        }
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm selection
        var confirmSkip = window.confirm("Are you sure?");

        //if skip
        if (confirmSkip) {
            playerMoney = playerMoney - 2;
            window.alert("You have chosen to skip the fight. You now have " + playerMoney + " BattleBucks left.");
        } else {
            fight()
        }        
    } else {
        window.alert("Please choose a valid option. Enter 'FIGHT' or 'SKIP'")
        fight();
    }
}

//fight();

//GAME STATES
//"WIN" - player robot defeats all enemy robot
//  * fight all enemy robots
//  * defeat all enemy robots
//"LOSE" - player's robot hits 0 or less
//  * fight enemy robots 
//  * health reduced to 0 or less 