var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a6caf9c1-db93-4bfd-b993-b761aae8998d"],"propsByKey":{"a6caf9c1-db93-4bfd-b993-b761aae8998d":{"name":"fondo","sourceUrl":"assets/api/v1/animation-library/gamelab/T167cO7veEolJu4MdK3thTgLhnqD_rJB/category_backgrounds/background_landscape09.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"T167cO7veEolJu4MdK3thTgLhnqD_rJB","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T167cO7veEolJu4MdK3thTgLhnqD_rJB/category_backgrounds/background_landscape09.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var Sofia = createSprite(10,10,6,6);
 Sofia.shapeColor="#72FCD8";
 


  var wall1 = createSprite(20,22,40,8);
  var wall2 = createSprite(70,50,20,8);
  var wall3 = createSprite(60,10,8,40);
  var wall4 = createSprite(40,90,8,95);
  var wall5 = createSprite(30,52,20,8);
  var wall6 = createSprite(10,75,20,8);
  var wall7 = createSprite(200,70,320,8);
  var wall8 = createSprite(100,80,8,115);
  var wall9 = createSprite(130,160,260,8);
  var wall10 = createSprite(30,100,20,8);
  var wall11 = createSprite(30,134,20,8);
  var wall12 = createSprite(3,118,6,8);
  var wall13 = createSprite(70,170,8,140);
  var wall14 = createSprite(390,70,25,8);
  var wall15 = createSprite(130,150,8,100);
  var wall16 = createSprite(176,100,100,8);
  var wall17 = createSprite(260,80,8,100);
  var wall18 = createSprite(225,130,130,8);
  var wall19 = createSprite(340,160,120,8);
  var wall20 = createSprite(150,22,40,8);
  var wall21 = createSprite(172,20,8,55);
  var wall22 = createSprite(215,22,40,8);
  var wall23 = createSprite(220,42,40,8);
  var wall24 = createSprite(290,22,8,40);
  var wall25 = createSprite(320,45,8,55);
  var wall26 = createSprite(135,45,20,8);
  var wall27 = createSprite(346,20,60,8);
  var wall28 = createSprite(380,46,50,8);
  var wall29 = createSprite(300,100,20,8);
  var wall30 = createSprite(340,100,20,8);
  var wall31 = createSprite(380,100,20,8);
  var wall32 = createSprite(320,130,20,8);
  var wall33 = createSprite(360,130,20,8);
  var wall34 = createSprite(400,130,20,8);
  var wall35 = createSprite(256,238,8,150);
  var wall36 = createSprite(280,220,180,8);
  var wall37 = createSprite(370,190,60,8);
  var wall38 = createSprite(290,190,60,8);
  var wall39 = createSprite(360,250,100,8);
  var wall40 = createSprite(270,250,30,8);
  var wall41 = createSprite(300,280,150,8);
  var wall42 = createSprite(372,325,8,95);
  var wall43 = createSprite(340,360,8,80);
  var wall44 = createSprite(300,325,8,95);
  var wall45 = createSprite(256,380,8,90);
  var wall46 = createSprite(221,324,8,95);
  var wall47 = createSprite(160,295,8,215);
  var wall48 = createSprite(191,190,70,8);
  var wall49 = createSprite(170,250,125,8);
  var wall50 = createSprite(105,290,8,180);
  var wall51 = createSprite(35,280,8,170);
  var wall52 = createSprite(70,276,65,8);
  var wall53 = createSprite(70,350,8,100);
  var wall54 = createSprite(160,352,40,8);
  var wall55 = createSprite(210,320,20,8);
  var wall56 = createSprite(160,286,50,8);
  var wall57 = createSprite(118,320,20,8);
  
  


var cup= createSprite(133,267,47,26);
 cup.shapeColor= "#FFF46F";
  
function draw() {
  
  background("#FC8D72");
  
  if(keyDown("up")){
    Sofia.velocityX=0;
    Sofia.velocityY=-1.5;
  }
  if(keyDown("down")){
    Sofia.velocityX=0;
    Sofia.velocityY=1.5;
    
  }
  if(keyDown("right")){
    Sofia.velocityX=1.5;
    Sofia.velocityY=0;
    
    
  }
  if(keyDown("left")){
    Sofia.velocityX=-1.5;
    Sofia.velocityY=0;
  }
  
   
createEdgeSprites();

Sofia.bounceOff(edges);



resetSofia();
checkwin();

drawSprites();

}

  

function resetSofia()
{
  if(Sofia.isTouching(wall1)|| Sofia.isTouching(wall2)||Sofia.isTouching(wall3)
   ||Sofia.isTouching(wall4)||Sofia.isTouching(wall5)||Sofia.isTouching(wall6)||Sofia.isTouching(wall7)||Sofia.isTouching(wall8)
   ||Sofia.isTouching(wall9)||Sofia.isTouching(wall10)||Sofia.isTouching(wall11)||Sofia.isTouching(wall12)||Sofia.isTouching(wall13)
   ||Sofia.isTouching(wall14)||Sofia.isTouching(wall15)||Sofia.isTouching(wall16)||Sofia.isTouching(wall17)||Sofia.isTouching(wall18)
   ||Sofia.isTouching(wall19)||Sofia.isTouching(wall20)||Sofia.isTouching(wall21)||Sofia.isTouching(wall22)||Sofia.isTouching(wall23)
   ||Sofia.isTouching(wall24)||Sofia.isTouching(wall25)||Sofia.isTouching(wall26)||Sofia.isTouching(wall27)||Sofia.isTouching(wall28)
   ||Sofia.isTouching(wall29)||Sofia.isTouching(wall30)||Sofia.isTouching(wall31)||Sofia.isTouching(wall32)||Sofia.isTouching(wall33)
   ||Sofia.isTouching(wall34)||Sofia.isTouching(wall35)||Sofia.isTouching(wall36)||Sofia.isTouching(wall37)||Sofia.isTouching(wall38)
   ||Sofia.isTouching(wall39)||Sofia.isTouching(wall40)||Sofia.isTouching(wall41)||Sofia.isTouching(wall42)||Sofia.isTouching(wall43)
   ||Sofia.isTouching(wall44)||Sofia.isTouching(wall45)||Sofia.isTouching(wall46)||Sofia.isTouching(wall47)||Sofia.isTouching(wall48)
   ||Sofia.isTouching(wall49)||Sofia.isTouching(wall50)||Sofia.isTouching(wall51)||Sofia.isTouching(wall52)||Sofia.isTouching(wall53)
   ||Sofia.isTouching(wall54)||Sofia.isTouching(wall55)||Sofia.isTouching(wall56)||Sofia.isTouching(wall57)
   
     ){
    Sofia.x=10;
    Sofia.y=10;
  }



}

function checkwin()
{
  if ( Sofia.isTouching(cup))  
{
  textSize(90);
  stroke("white");
  fill("#AEFEA3");
  textFont("tahoma");
 text("You Win", 10,200);
  
  
}
}























// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
