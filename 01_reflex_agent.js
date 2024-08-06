// MIT License
// Copyright (c) 2020 Luis Espino

function reflex_agent(location, state) {
    if (state == "DIRTY") return "CLEAN";
    else if (location == "A") return "RIGHT";
    else if (location == "B") return "LEFT";
}

function test(states) {
    var location = states[0];
    var state = states[0] == "A" ? states[1] : states[2];
    var action_result = reflex_agent(location, state);
    document.getElementById("log").innerHTML += "<br>Location: ".concat(location).concat(" | Action: ").concat(action_result).concat(" | State: ").concat(states);
    
    if (action_result == "CLEAN") {
        if (location == "A") states[1] = "CLEAN";
        else if (location == "B") states[2] = "CLEAN";
    } else if (action_result == "RIGHT") states[0] = "B";
    else if (action_result == "LEFT") states[0] = "A";

    // Check if all states have been visited
    if (states[1] == "CLEAN" && states[2] == "CLEAN" && location == "A") {
        document.getElementById("log").innerHTML += "<br>All states visited!";
        return;
    }

    setTimeout(function() { test(states); }, 2000);
}

// Start the simulation with initial state
var states = ["A", "DIRTY", "DIRTY"];
test(states);
