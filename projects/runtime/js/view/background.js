var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
        var mountain;
        var backgroundMountains = [];
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            var backgroundFill = draw.rect(canvasWidth,canvasHeight,'#212121');
            background.addChild(backgroundFill);
            
            // TODO 2: - Add a moon and starfield
        
            for (var index = 0; index <= 100; index++) {
                var star = draw.circle(0.25, "white", "LightGray", 2);
                star.x = canvasWidth * Math.random();
                star.y = canvasHeight * Math.random();
                background.addChild(star);
            }

            var moon = draw.bitmap("img/infinite-tsukuyomi.png")
            moon.x = 1200;
            moon.y = 50;
            moon.scaleX = 0.365;
            moon.scaleY = 0.365;
            background.addChild(moon);
            
            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            for (var i = 0; i < 3; i++) {
                var moreMountains = draw.bitmap(backgroundMountains[i])
                moreMountains.x = 200 * i;
                moreMountains.y = 25;
                background.addChild(moreMountains);
                backgroundMountains.push(moreMountains);
            }

            // TODO 3: Part 1 - Add a tree
            mountain = draw.bitmap("img/mountain.png");
            mountain.x = 350;
            mountain.y = 25;
            mountain.scaleX = 3;
            mountain.scaleY = 3;
            background.addChild(mountain);            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree!
            mountain.x -= 1;

            if (mountain.x < -1000) {
                mountain.x = canvasWidth;
            }
            
            // TODO 4: Part 2 - Parallax
            

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
