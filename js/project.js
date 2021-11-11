$(function () {
    $("html").easeScroll();
    var controller = new ScrollMagic.Controller();

    var tween1 = new TimelineMax();
    tween1.to('.animation1-1 span:nth-child(1)', 10, {
        color: "yellow",
        // scale: 1,
        y: -100,
        opacity: 0

    }).to('.animation1-1 span:nth-child(2)', 10, {
        // backgroundColor: "red",
        color: "red",
        // scale: 1,
        y: -100,
        opacity: 0

    }).to('.animation1-1 span:nth-child(3)', 10, {
        // backgroundColor: "red",
        color: "blue",
        // scale: 1,
        y: -100,
        opacity: 0
        

    }).to('.animation1-1 span:nth-child(4)', 10, {
        // backgroundColor: "red",
        color: "orange",
        // scale: 1,
        y: -100,
        opacity: 0

    }).to('.animation1-1 span:nth-child(5)', 10, {
        // backgroundColor: "red",
        color: "green",
        // scale: 1,
        y: -100,
        opacity: 0

    }).to('.animation1-1 span:nth-child(6)', 10, {
        // backgroundColor: "red",
        color: "red",
        // scale: 1,
        y: -100,
        opacity: 0

    }).to('.animation1-1 span:nth-child(7)', 10, {
        // backgroundColor: "red",
        color: "pink",
        // scale: 1,
        y: -100,
        opacity: 0

    });
    var tween2 = new TimelineMax();
    tween2.to('.animation1-2 span:nth-child(7)', 10, {
        color: "yellow",
        // scale: 1,
        y: -100,
        opacity: 0

    }).to('.animation1-2 span:nth-child(6)', 10, {
        // backgroundColor: "red",
        color: "red",
        // scale: 1,
        y: -100,
        opacity: 0

    }).to('.animation1-2 span:nth-child(5)', 10, {
        // backgroundColor: "red",
        color: "blue",
        // scale: 1,
        y: -100,
        opacity: 0


    }).to('.animation1-2 span:nth-child(4)', 10, {
        // backgroundColor: "red",
        color: "green",
        // scale: 1,
        y: -100,
        opacity: 0

    }).to('.animation1-2 span:nth-child(3)', 10, {
        // backgroundColor: "red",
        color: "orange",
        // scale: 1,
        y: -100,
        opacity: 0

    }).to('.animation1-2 span:nth-child(2)', 10, {
        // backgroundColor: "red",
        color: "pink",
        // scale: 1,
        y: -100,
        opacity: 0

    }).to('.animation1-2 span:nth-child(1)', 10, {
        // backgroundColor: "red",
        color: "purple",
        // scale: 1,
        y: -100,
        opacity: 0

    });
    var tween3 = new TimelineMax();
    tween3.to('.section3 .imgbox ul', 10, { yPercent: -220 })
    

    var scene = new ScrollMagic.Scene({
        triggerHook: 0, //trigger 발생지점 설정 (맨위에 있어야함)
        triggerElement: ".section1",
        duration: 4000,
        offset: 0
    }).setPin(".section1").addIndicators({ name: "1 (duration: 100)" }).setTween(tween1).addTo(controller);

    var scene2 = new ScrollMagic.Scene({
        triggerHook: 0, //trigger 발생지점 설정 (맨위에 있어야함)
        triggerElement: ".section1",
        duration: 4000,
        offset: 0
    }).addIndicators({ name: "1 (duration: 100)" }).setTween(tween2).addTo(controller);
    
    var scene3 = new ScrollMagic.Scene({
        triggerHook: 0, //trigger 발생지점 설정 (맨위에 있어야함)
        triggerElement: ".section3",
        duration:8000,
        offset: 0
    }).setPin(".section3").addIndicators({ name: "1 (duration: 100)" }).setTween(tween3).addTo(controller);
    // var scene2 = new ScrollMagic.Scene({
    //     triggerHook: 0, //trigger 발생지점 설정 (맨위에 있어야함)
    //     triggerElement: ".section1",
    //     duration: 3000,
    //     offset: 0
    // }).addIndicators({ name: "1 (duration: 100)" }).setTween(tween1).addTo(controller);
    var wipeAnimation = new TimelineMax()
        .fromTo(".h1", 3, { x: "-100%" }, { x: "0%", ease: Linear.easeNone })  // in from left
        .fromTo(".h2", 3, { x: "100%" }, { x: "0%", ease: Linear.easeNone })  // in from right
        .fromTo(".h3", 3, { y: "-100%" }, { y: "0%", ease: Linear.easeNone }) // in from top
        .fromTo(".h4", 3, { y: "100%" }, { y: "0%", ease: Linear.easeNone }); // in from top

    // create scene to pin and link animation
    new ScrollMagic.Scene({
        triggerElement: ".h-scroll-section",
        triggerHook: "onLeave",
        duration: 8000
    })
        .setPin(".h-scroll-section")
        .setTween(wipeAnimation)
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);
});