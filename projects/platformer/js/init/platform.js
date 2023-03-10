(function (window) {
  "use strict";
  window.opspark = window.opspark || {};
  window.opspark.platform = window.opspark.platform || {};

  let platform = window.opspark.platform;

  /**
   * init: This function initializes the platforms for the level.
   *
   * GOAL: Add as many platforms necessary to make your level challenging.
   *
   * Use the createPlatform Function to create platforms for the level.
   *
   * createPlatform() takes these arguments:
   *
   *      createPlatform(x, y, scaleX, scaleY);
   *
   *      x: The x coordineate for the platform.
   *      y: The y coordineate for the platform.
   *      scaleX: OPTIONAL The scale factor on the x-axis, this value will
   *              stretch the platform in width.
   *      scaleY: OPTIONAL The scale factor on the y-axis, this value will
   *              stretch the platform in height.
   */
  function init(game) {
    let createPlatform = platform.create;

    ////////////////////////////////////////////////////////////////////////
    // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////

    /*
     * ground : here, we create a floor. Given the width of of the platform
     * asset, giving it a scaleX and scaleY of 2 will stretch it across the
     * bottom of the game.
     */
    createPlatform(0, game.world.height - 32, 4, 2); // DO NOT DELETE
    createPlatform(900, 90, 0.05, 20)

    createPlatform(700, 590, 0.5, 0.5);
    createPlatform(350, 520, 0.3, 0.5);
    createPlatform(700, 450, 0.5, 0.5);
    createPlatform(350, 370, 0.5, 0.5);
    createPlatform(0, 300, 0.3, 0.5);
    createPlatform(250, 230, 0.4, 0.5);
    createPlatform(575, 160, 0.85, 0.5);
    createPlatform(800, 90, 0.5, 0.5);
    createPlatform(1200, 100, 0.5, 0.5);
    createPlatform(990, 300, 0.3, 0.5);
    createPlatform(1150, 425, 0.3, 0.5);
    createPlatform(990, 555, 0.3, 0.5);

    // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
  }
  platform.init = init;
})(window);
