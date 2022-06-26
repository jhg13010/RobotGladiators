//welcome to game
window.alert("Welcome to Robot Gladiators!");

//fetch user robot's name
var playerName = window.prompt("What is your robot's name?");

//setup initial attributes
var playerHealth = 100;
var playerAttack = 10;

//starting status
console.log(playerName, playerHealth, playerAttack);

//enemy Setup
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

//enemy starting status
console.log(enemyName, enemyHealth, enemyAttack);

var fight = function() {
    //ask to fight
    var promptFight = window.prompt("Do you want to fight, or skip? Enter 'FIGHT' or 'SKIP'.");

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
    }

    //skip conditions
    else if (promptFight === "skip" || promptFight === "SKIP") {
        window.alert(playerName + " has chosen to skip the fight.");
    }

    else {
        window.alert("Please choose a valid option. Enter 'FIGHT' or 'SKIP'");
    }
}

fight();