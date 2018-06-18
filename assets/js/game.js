var battle = {
    userPlayer: {},
    opponent: {},
    conqueredOps: 0,
    userSelect: (name)=>{
        battle.userPlayer = players.find( player => player.name === name );
    },
    opponentSelect: (name)=>{
        battle.opponent = players.find( player => player.name === name );
    },
    userStrike: ()=>{
        battle.opponent.healthPoints -= battle.userPlayer.attackPower;
        console.log("Opponent Health: " + battle.opponent.healthPoints);
        battle.userPlayer.attackPower += battle.userPlayer.attackMultiplier;
        if(battle.opponent.healthPoints < 0){
            // Its over
            battle.conqueredOps++;
            battle.opponent.status = 'dead';
            $("#" + battle.opponent.name).remove();
        }
        else{battle.counterStrike();}
        console.log('Oponnent Status: ' + battle.opponent.status);
        
    },
    counterStrike: ()=>{
        battle.userPlayer.healthPoints -= battle.opponent.attackPower;
        console.log("Your Health: " + battle.userPlayer.healthPoints);
        battle.userPlayer.statusCheck();
    }
};

const playerSelect = function(playerName){
    // If user is selected than this is an opponent
    if(battle.userPlayer.role === "player"){
        oppSelect(playerName);
    }
    else{
        // Change header
        $("#userMessage").html("Select an opponent").addClass("red-text");
        // Make current user player
        battle.userSelect(playerName);
        console.log('You\'ve Selected: ');
        console.log(battle.userPlayer);
        // Store this card for later - but lets manipulate is first
        // Change Button label to attack & change onclick to attack
        $('#' + playerName +'Action').html('Attack').attr('onclick', 'battle.userStrike()');

        // Ingest it as a div for later
        battle.userPlayer.card = $("#" + playerName);
        $("#" + playerName).remove();
        // Fade this in later
        $('#arena').hide();
        $("#arena").append(battle.userPlayer.card);
        $("#arena").append(buildScoreBoard());
        // Change all other user buttons
        $(".btn-primary").addClass('btn-danger');
        $(".btn-primary").attr('onclick', $('btn-primary').attr('player'));
        $(".btn-primary").removeClass('btn-primary');
    }
    
}

const oppSelect = function (oppName){
    // Change header
    $("#userMessage").html("Fight");
    // Bring opponent to game Obj
    battle.opponentSelect(oppName);
    // Log opp data
    console.log('You\'re fighting ' + oppName);
    console.log(battle.opponent);
    // Store this card for later - but lets manipulate is first
    // Remove button
    $('#' + oppName + 'Action').remove();

    // Ingest it as a div for later
    battle.opponent.card = $("#" + oppName);
    // Remove from player list
    $("#" + oppName).remove();
    // Fade this in later
    $("#arena").append(battle.opponent.card);
    $('#available-players').fadeOut(1000);
    $('#arena').fadeIn(1700);
}

function toggleActionBtn(){
    let player = $('.action').attr('player');
    console.log(name);
}

function buildScoreBoard(){
    let scoreboard = $('<div>');
    scoreboard.attr('class', 'col-4 text-center');
    let userHealth = $('<div>');
    userHealth.attr('id', 'userHealth');
    userHealth.append('<h3>Your Health: </h3>');
    let userHealthScore = $('<div>');
    userHealthScore.attr('id', 'UHS');
    userHealth.append(userHealthScore);
    let oppHealth = $('<div>');
    oppHealth.attr('id', 'oppHealth');
    oppHealth.append('<h3>Opponent\'s Health: </h3>');
    let oppHealthScore = $('<div>');
    oppHealthScore.attr('id', 'OHS');
    oppHealth.append(oppHealthScore);
    scoreboard.append(userHealth);
    scoreboard.append('<br>')
    scoreboard.append(oppHealth);

    return scoreboard;
}