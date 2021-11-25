var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["d644b61a-c6e6-4b2f-801a-fdc924ba8931","ff31228e-7402-40ba-965f-3e08a3364ebf","b8879696-f2b0-4620-8c87-df1add2f61b6"],"propsByKey":{"d644b61a-c6e6-4b2f-801a-fdc924ba8931":{"name":"t","sourceUrl":null,"frameSize":{"x":352,"y":324},"frameCount":2,"looping":true,"frameDelay":15,"version":"9cwJZSyR_3cxv.LVV3DiqNn_1ByTaD_Y","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":352,"y":648},"rootRelativePath":"assets/d644b61a-c6e6-4b2f-801a-fdc924ba8931.png"},"ff31228e-7402-40ba-965f-3e08a3364ebf":{"name":"d","sourceUrl":null,"frameSize":{"x":391,"y":358},"frameCount":1,"looping":true,"frameDelay":12,"version":"Y4grxE8L5qQKJq0C49PFUyd7iBueXZbR","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":391,"y":358},"rootRelativePath":"assets/ff31228e-7402-40ba-965f-3e08a3364ebf.png"},"b8879696-f2b0-4620-8c87-df1add2f61b6":{"name":"sus","sourceUrl":"assets/api/v1/animation-library/gamelab/CCeHLe0TiMzx1IIuP0jzcEDgk5qn0kqz/category_emoji/halloweenemoji_12.png","frameSize":{"x":310,"y":342},"frameCount":1,"looping":true,"frameDelay":2,"version":"CCeHLe0TiMzx1IIuP0jzcEDgk5qn0kqz","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":310,"y":342},"rootRelativePath":"assets/api/v1/animation-library/gamelab/CCeHLe0TiMzx1IIuP0jzcEDgk5qn0kqz/category_emoji/halloweenemoji_12.png"}}};
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

var thief=createSprite(15,380,30,30);
thief.shapeColor="#E9FFD7 ";
 thief.setAnimation("t");
 thief.scale=0.10;
var diamante=createSprite(380,20,30,30);
diamante.shapeColor="#E9FFD7";
 diamante.setAnimation("d");
 diamante.scale=0.09;
  
var laser1=createSprite(100,0,200,4);
 laser1.shapeColor="#FA5E5E";
 laser1.velocityY=2;
var laser2=createSprite(300,400,200,4); 
 laser2.shapeColor="#FA5E5E";
 laser2.velocityY=-2;
var laser3=createSprite(200,100,4,200);
 laser3.shapeColor="#FA5E5E";
 laser3.velocityY=0;
 laser3.velocityX=-2.5;
 





function draw() {
  background(220);
  background("#FFF3D7");
  

  

   if(keyDown("UP_ARROW")){
    thief.velocityX=0;
    thief.velocityY=-2.5;
  }
  if(keyDown("DOWN_ARROW")){
    thief.velocityX=0;
    thief.velocityY=2.5;
    
  }
  if(keyDown("RIGHT_ARROW")){
    thief.velocityX=2.5;
    thief.velocityY=0;
    
    
  }
  if(keyDown("LEFT_ARROW")){
    thief.velocityX=-2.5;
    thief.velocityY=0;
  }
  
  
  

createEdgeSprites();
laser1.bounceOff(edges);
laser2.bounceOff(edges);
laser3.bounceOff(edges);
thief.bounceOff(edges);


    resetthief();
    checkwin();
    drawSprites();
    

}
function resetthief(){
  if(thief.isTouching(laser1)||thief.isTouching(laser2)||thief.isTouching(laser3)){

textSize(50);
fill("#A20000");
textFont("tahoma");
text("Ladrón atrapado ",20,200);
laser1.velocityY=0;
laser2.velocityY=0;
laser3.velocityX=0;
thief.velocityY=0;
thief.velocityX=0;
thief.setAnimation("sus");
}

}

function checkwin()
{
  
  if(thief.isTouching(diamante)){
  textSize(90);
  stroke("white");
  fill("#10E82A");
  textFont("tahoma");
 text("Tienes el", 10,200);
 text("diamante", 10,300);
 laser1.velocityY=0;
 laser2.velocityY=0;
 laser3.velocityX=0;
 thief.velocityY=0;
 thief.velocityX=0;
  
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
