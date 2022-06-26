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
    //alert start 
    window.alert("Welcome to Round " + (i+1) + " of Robot Gladiators. 3...2...1...FIGHT");
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
for(var i=0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    //ask to fight if health > 0
    if (playerHealth > 0) {
        var promptFight = window.prompt("Do you want to fight, or skip for 2 BattleBucks? Enter 'FIGHT' or 'SKIP'.");
    } else {
        window.alert("I'm sorry" + playerName + "! You have died and cannot fight any longer.");
        break;
    }

    //indicate fight start 
    if (promptFight === "FIGHT" || promptFight === "fight") {
        fight(pickedEnemyName);
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm selection
        var confirmSkip = window.confirm("Are you sure?");
            //if skip
            if (confirmSkip) {
                playerMoney = playerMoney - 2;
                window.alert("You have chosen to skip the fight. You now have " + playerMoney + " BattleBucks left.");
                i = i++
            } else {
                fight(pickedEnemyName);
            }   
    } else {
        window.alert("Please choose a valid option. Enter 'FIGHT' or 'SKIP'")
        }
}

//GAME STATES
//"WIN" - player robot defeats all enemy robot
//  * fight all enemy robots
//  * defeat all enemy robots
//"LOSE" - player's robot hits 0 or less
//  * fight enemy robots 
//  * health reduced to 0 or less