var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;
    var canvasWidth = 1600
    var usefulLength = 100;
    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "One-Tail",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: canvasWidth, y: groundY - 10 },
          { type: "sawblade", x: canvasWidth + usefulLength*2, y: groundY - 100 },
          { type: "sawblade", x: canvasWidth + usefulLength*4, y: groundY - 10},
          { type: "sawblade", x: canvasWidth + usefulLength*5, y: groundY - 100},
          { type: "sawblade", x: canvasWidth + usefulLength*7, y: groundY - 10},
          { type: "sawblade", x: canvasWidth + usefulLength*8, y: groundY - 10},
          { type: "reward", x: canvasWidth + usefulLength*5, y: groundY - 50},
        ],
      },
      {
        name: "Two-Tail",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: canvasWidth + usefulLength*2, y: groundY - 10},
          { type: "sawblade", x: canvasWidth + usefulLength*4, y: groundY - 10},
          { type: "sawblade", x: canvasWidth + usefulLength*5, y: groundY- 100},
          { type: "enemy", x: canvasWidth + usefulLength*6, y: groundY - 50},
          { type: "enemy", x: canvasWidth + usefulLength*8, y: groundY - 50},
          { type: "reward", x: canvasWidth + usefulLength*10, y: groundY - 30},
        ],
      },
      {
        name: "Three-Tail",
        number: 3,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: canvasWidth + usefulLength*2, y: groundY - 100},
          { type: "enemy", x: canvasWidth + usefulLength*4, y: groundY - 50},
          { type: "sawblade", x: canvasWidth + usefulLength*6, y: groundY - 10},
          { type: "sawblade", x: canvasWidth + usefulLength*7, y: groundY - 100},
          { type: "enemy", x: canvasWidth + usefulLength*9, y: groundY - 50},
          { type: "reward", x: canvasWidth + usefulLength*13, y: groundY - 50},
        ],
      },
      {
        name: "Four-Tail",
        number: 4,
        speed: -3,
        gameItems: [
          { type: "enemy", x: canvasWidth + usefulLength*2, y: groundY - 50},
          { type: "sawblade", x: canvasWidth + usefulLength*4, y: groundY - 10},
          { type: "sawblade", x: canvasWidth + usefulLength*5.5, y: groundY - 100},
          { type: "sawblade", x: canvasWidth + usefulLength*7, y: groundY - 50},
          { type: "enemy", x: canvasWidth + usefulLength*8, y: groundY - 50},
          { type: "sawblade", x: canvasWidth + usefulLength*10, y: groundY - 10},
          { type: "sawblade", x: canvasWidth + usefulLength*12, y: groundY - 50},
          { type: "enemy", x: canvasWidth + usefulLength*13, y: groundY - 50},
          { type: "reward", x: canvasWidth + usefulLength*15, y: groundY - 50},
        ],
      },
      {
        name: "Five-Tail",
        number: 5,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: canvasWidth + usefulLength*2, y: groundY - 10 },
          { type: "sawblade", x: canvasWidth + usefulLength*2, y: groundY - 50 },
          { type: "sawblade", x: canvasWidth + usefulLength*2, y: groundY - 100 },
          { type: "enemy", x: canvasWidth + usefulLength*4, y: groundY - 50 },
          { type: "enemy", x: canvasWidth + usefulLength*6, y: groundY - 50 },
          { type: "reward", x: canvasWidth + usefulLength*10, y: groundY - 50 },
        ],
      },
      {
        name: "Six-Tail",
        number: 6,
        speed: -3,
        gameItems: [ 
          { type: "enemy", x: canvasWidth + usefulLength*2, y: groundY - 50 },
          { type: "sawblade", x: canvasWidth + usefulLength*3, y: groundY - 10 },
          { type: "sawblade", x: canvasWidth + usefulLength*3, y: groundY - 100 },
          { type: "sawblade", x: canvasWidth + usefulLength*3, y: groundY - 50 },
          { type: "enemy", x: canvasWidth + usefulLength*4, y: groundY - 50 },
          { type: "sawblade", x: canvasWidth + usefulLength*6, y: groundY - 10 },
          { type: "sawblade", x: canvasWidth + usefulLength*6, y: groundY - 50 },
          { type: "sawblade", x: canvasWidth + usefulLength*6, y: groundY - 100 },
          { type: "reward", x: canvasWidth + usefulLength*9, y: groundY - 50 },
        ],
      },
      {
        name: "Seven-Tail",
        number: 7,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: canvasWidth + usefulLength*2, y: groundY - 10 },
          { type: "sawblade", x: canvasWidth + usefulLength*2, y: groundY - 50 },
          { type: "sawblade", x: canvasWidth + usefulLength*2, y: groundY - 100 },
          { type: "sawblade", x: canvasWidth + usefulLength*4, y: groundY - 10 },
          { type: "sawblade", x: canvasWidth + usefulLength*4, y: groundY - 50 },
          { type: "sawblade", x: canvasWidth + usefulLength*4, y: groundY - 100 },
          { type: "enemy", x: canvasWidth + usefulLength*5, y: groundY - 50 },
          { type: "enemy", x: canvasWidth + usefulLength*7, y: groundY - 50 },
          { type: "reward", x: canvasWidth + usefulLength*10, y: groundY - 50 },
        ],
      },
      {
        name: "Eight-Tail",
        number: 8,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: canvasWidth + usefulLength*2, y: groundY - 10 },
          { type: "sawblade", x: canvasWidth + usefulLength*2, y: groundY - 50 },
          { type: "sawblade", x: canvasWidth + usefulLength*2, y: groundY - 100 },
          { type: "sawblade", x: canvasWidth + usefulLength*4, y: groundY - 10 },
          { type: "sawblade", x: canvasWidth + usefulLength*4, y: groundY - 50 },
          { type: "sawblade", x: canvasWidth + usefulLength*4, y: groundY - 100 },
          { type: "enemy", x: canvasWidth + usefulLength*6, y: groundY - 50 },
          { type: "enemy", x: canvasWidth + usefulLength*8, y: groundY - 50 },
          { type: "sawblade", x: canvasWidth + usefulLength*10, y: groundY -10 },
          { type: "sawblade", x: canvasWidth + usefulLength*10, y: groundY - 50 },
          { type: "sawblade", x: canvasWidth + usefulLength*10, y: groundY - 100 },
          { type: "reward", x: canvasWidth + usefulLength*13, y: groundY - 50 },
        ],
      },
      {
        name: "Nine-Tail",
        number: 9,
        speed: -5,
        gameItems: [
          { type: "enemy", x: canvasWidth + usefulLength*2, y: groundY - 50 },
          { type: "enemy", x: canvasWidth + usefulLength*4, y: groundY - 50 },
          { type: "enemy", x: canvasWidth + usefulLength*6, y: groundY - 50 },
          { type: "sawblade", x: canvasWidth + usefulLength*8, y: groundY - 10 },
          { type: "sawblade", x: canvasWidth + usefulLength*8, y: groundY - 50 },
          { type: "sawblade", x: canvasWidth + usefulLength*8, y: groundY - 100 },
          { type: "sawblade", x: canvasWidth + usefulLength*10, y: groundY - 10 },
          { type: "sawblade", x: canvasWidth + usefulLength*10, y: groundY - 50 },
          { type: "sawblade", x: canvasWidth + usefulLength*10, y: groundY - 100 },
          { type: "enemy", x: canvasWidth + usefulLength*11, y: groundY - 10 },
          { type: "enemy", x: canvasWidth + usefulLength*11, y: groundY - 10 },
          { type: "sawblade", x: canvasWidth + usefulLength*13, y: groundY - 10 },
          { type: "sawblade", x: canvasWidth + usefulLength*13, y: groundY - 50 },
          { type: "sawblade", x: canvasWidth + usefulLength*13, y: groundY - 100 },
          { type: "sawblade", x: canvasWidth + usefulLength*15, y: groundY - 10 },
          { type: "sawblade", x: canvasWidth + usefulLength*15, y: groundY - 50 },
          { type: "sawblade", x: canvasWidth + usefulLength*15, y: groundY - 100 },
          { type: "sawblade", x: canvasWidth + usefulLength*16, y: groundY - 50 },
          { type: "sawblade", x: canvasWidth + usefulLength*16, y: groundY - 50 },
          { type: "sawblade", x: canvasWidth + usefulLength*16, y: groundY - 50 },
          { type: "sawblade", x: canvasWidth + usefulLength*16, y: groundY - 50 },
          { type: "sawblade", x: canvasWidth + usefulLength*16, y: groundY - 50 },
          { type: "sawblade", x: canvasWidth + usefulLength*16, y: groundY - 50 },
          { type: "sawblade", x: canvasWidth + usefulLength*16, y: groundY - 50 },
          { type: "reward", x: canvasWidth + usefulLength*18, y: groundY - 50 },
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
