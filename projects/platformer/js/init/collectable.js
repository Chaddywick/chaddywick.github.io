(function (window) {
  "use strict";
  window.opspark = window.opspark || {};
  window.opspark.collectable = window.opspark.collectable || {};
  let collectable = window.opspark.collectable;

  let type = {
    db: { assetKey: "db", points: 1 },
    max: { assetKey: "max", points: 1 },
    steve: { assetKey: "steve", points: 1 },
    grace: { assetKey: "grace", points: 1 },
    kennedi: { assetKey: "kennedi", points: 1 },
  };

  window.opspark.collectable.type = type;

  /**
   * init: Initialize all collectables.
   *
   * GOAL: Add as many collectables as necessary to make your level challenging.
   *
   * Use the createCollectable() Function to create collectables for the level.
   * See the type Object, above, for the types of collectables and their point values.
   *
   * createCollectable() takes these arguments:
   *
   *      createCollectable(type, x, y, gravity, bounce);
   *
   *      type: The type of the collectable, use the type Object above.
   *      x: The x coordineate for the collectable.
   *      y: The y coordineate for the collectable.
   *      gravity: OPTIONAL The gravitational pull on the collectable.
   *      bounce: OPTIONAL A factor effecting how much the collectable will bounce off platforms, etc.
   */
  function init(game) {
    let createCollectable = collectable.create;

    ////////////////////////////////////////////////////////////////////////
    // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////

    // example:
    createCollectable(type.steve, 370, 440, 10, 1);
    createCollectable(type.grace, 370, 300, 10, 1);
    createCollectable(type.kennedi, 875, 10, 10, 1);
    createCollectable(type.max, 1300, 10, 10, 1);
    createCollectable(type.steve, 1015, 220, 10, 1);
    createCollectable(type.grace, 1015, 470, 10, 1);
    createCollectable(type.db, 1300, 590, 10, 1);

    // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
  }
  collectable.init = init;
})(window);
