$(function () {
  var controller = new ScrollMagic.Controller();

  var tween1 = new TimelineMax();
  tween1.to('.row3', 1, {
  backgroundColor: "blue",
  x: 1000,
    // scale: 1,
    x: 2000,
    
  }).to('.row3', 1, {
  color:"red",
  scale: 1.5,
  rotation: 180,
    x: 0,
   
  });
  
  var scene = new ScrollMagic.Scene({
    triggerHook: 0, //trigger 발생지점 설정 (맨위에 있어야함)
    triggerElement: ".row3",
    duration: 3000,
    offset:0
  }).setPin(".row3").addIndicators({name: "1 (duration: 100)"}).setTween(tween1).addTo(controller);
});