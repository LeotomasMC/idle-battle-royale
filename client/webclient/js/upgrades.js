var upgrades = [];


var testupgrade = {
    name: "Test",
    id: "test",
    unlock: function() {return buildings.Player.amount>=1},
    cost: function() {return window.game.lootboxes >= 5},
    onUnlock: function() {
        window.game.lootboxes = window.game.lootboxes - 5;
        document.getElementById("upgrades").removeChild(getElementById('upgrade-test'));
        window.game.lootboxesPerClick = window.game.lootboxesPerClick + 1;
    }
}

upgrades.push(testupgrade);

function tickUpgrades() {
    for (var i = 0; i < upgrades.length; i++) {
        tu = upgrades[i];
        if (tu.unlock) {
            document.getElementById('upgrade-' + tu.id).hidden = false;
        }
    }
}

function loadUpgrades() {
    var upgradeContainer = document.getElementById('upgrades');
    for (var upgrade in upgrades) {
        tu = upgrades[upgrade];
        element = document.createElement('button');
        element.setAttribute("id", "upgrade-" + tu.id);
        //element.hidden = true
        upgradeContainer.appendChild(element);
        
    }
}