var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    function createSawBlade(x, y) {
      var hitZoneSize = 5;
      var damageFromObstacle = 10;
      var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
      sawBladeHitZone.x = x;
      sawBladeHitZone.y = y;
      game.addGameItem(sawBladeHitZone);

      var obstacleImage = draw.bitmap("img/kunai.png");
      obstacleImage.x = -10;
      obstacleImage.y = -20;
      obstacleImage.scaleX = 0.145;
      obstacleImage.scaleY = 0.145;
      sawBladeHitZone.addChild(obstacleImage)
    }

    // Enemy declaration
    function createEnemy(x, y) {
      var enemy = game.createGameItem("enemy", 20);
      var enemyNinja = draw.bitmap("img/enemy ninja.png");
      enemyNinja.x = 50;
      enemyNinja.y = -50;
      enemyNinja.scaleX = -0.3;
      enemyNinja.scaleY = 0.3;
      enemy.addChild(enemyNinja);
      enemy.x = x;
      enemy.y = y;
      game.addGameItem(enemy);

    // Enemy customization
      enemy.velocityX = -4;
      enemy.onPlayerCollision = function() {
        game.changeIntegrity(-25);
      };

      enemy.onProjectileCollision = function() {
        game.increaseScore(10);
        enemy.shrink();
      };
    };

    // Rewards
    tailedBeastObjects = ["img/one tail.png", "img/two tails.png", "img/three tails.png", "img/four tails.png", "img/five tails.png", "img/six tails.png", "img/seven tails.png", "img/eight tails.png", "img/nine tails.png"]

    function createReward(x, y, image) {
      var reward = game.createGameItem("reward", 20);
      var tailedBeast = draw.bitmap(image);
      tailedBeast.x = -130;
      tailedBeast.y = -140;
      tailedBeast.scaleX = 0.3;
      tailedBeast.scaleY = 0.3;
      reward.addChild(tailedBeast);
      reward.x = x;
      reward.y = y;
      game.addGameItem(reward);

      reward.velocityX = -2;
      reward.onPlayerCollision = function() {
        game.changeIntegrity(50);
        game.increaseScore(100);
        reward.shrink();
        startLevel();
      }
    };

    function startLevel() {
      // TODO 13 goes below here
      var level = levelData[currentLevel];
      var levelObjects = level.gameItems;
      for (var i = 0; i < levelObjects.length; i++) {
        if (levelObjects[i].type === "sawblade") {
          createSawBlade(levelObjects[i].x, levelObjects[i].y);
        };
        if (levelObjects[i].type === "enemy") {
          createEnemy(levelObjects[i].x, levelObjects[i].y);
        };
        if (levelObjects[i].type === "reward") {
          createReward(levelObjects[i].x, levelObjects[i].y, tailedBeastObjects[currentLevel]);
        };
      };

      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
