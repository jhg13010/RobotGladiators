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
    //alert players of start
    window.alert("Welcome to Robot Gladiators!");

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

fight();