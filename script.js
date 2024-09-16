function locomotiveAnimation(){
  gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed"*/
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

function loadingAnimation(){
  var tl = gsap.timeline()
  tl.from("#page1",{
    opacity:0,
    duration:0.2,
    delay:0.2
  })
  tl.from("#page1",{
    transform:"scaleX(0.7) scaleY(0.2) translateY(80%)",
    borderRadius:"150px",
    duration:2,
    ease:"expo.out"
  })
  tl.from("nav",{
    opacity:0,
    delay:-0.2
  })
  tl.from("#page1 h1 , #page1 p, #page1 div",{
    opacity:0,
    duration:0.5,
  stagger:0.2
  })
  
}
function navAnimation(){
  var nav = document.querySelector("nav")
  nav.addEventListener("mouseenter", function(){
    let tl = gsap.timeline()
   tl.to("#nav-bottom",{
    height : "24vh"
   })
   tl.to(".nav-part2 h5",{
    display:"block"
   })
   tl.to(".nav-part2 h5 span",{
    y:0,
    // duration : 0.3,
    stagger:{
      amount:0.6,
    }
   })
  })
  
  nav.addEventListener("mouseleave",function(){
    console.log("hello")
    let tl = gsap.timeline()
   tl.to(".nav-part2 h5 span",{
    y:25,
    stagger:{
      amount:0.2,
    }
   })
   tl.to(".nav-part2 h5",{
  display:"none",
  duration : 0.1
   })
   tl.to("#nav-bottom",{
    height : 0,
    duration : 0.2
   })
  }) 
}

function page2Animation(){
  var rightElems = document.querySelectorAll(".right-elem")
  rightElems.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
      gsap.to(elem.childNodes[3],{
        opacity : 1,
        scale: 1
      })
  })
    elem.addEventListener("mouseleave",function(){
      gsap.to(elem.childNodes[3],{
        opacity : 0,
        scale: 0
    })
    })
    elem.addEventListener("mousemove",function(dets){
      gsap.to(elem.childNodes[3],{
      x:dets.x - elem.getBoundingClientRect().x-50,
      y:dets.y - elem.getBoundingClientRect().y-140
    })
    })
  })
}

function page3VideoAnimation(){
  var page3center = document.querySelector(".page3-center")
  var video = document.querySelector("#page3 video")
  
  page3center.addEventListener("click",function(){
    video.play()
    gsap.to(video,{
      transform:"scaleX(1) scaleY(1)",
      opacity:1,
      borderRadius:0
    })
  })
  video.addEventListener("click",function(){
    video.pause()
    gsap.to(video,{
      transform:"scaleX(0.7) scaleY(0)",
      opacity:0,
      borderRadius:"30px"
    })
  })
}

function page5animation(){
  var sections = document.querySelectorAll(".sec-right")
  sections.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
      elem.childNodes[3].style.opacity=1;
      elem.childNodes[3].play()
    })
  })
  sections.forEach(function(elem){
    elem.addEventListener("mouseleave",function(){
        elem.childNodes[3].style.opacity=0;
        elem.childNodes[3].load()
        
      })
    })
}

function page6animation(){

//   var divs = document.querySelectorAll("#page6-left")
// divs.forEach(function(elem){
//   elem.addEventListener("mouseenter",function(){
//     elem.childNodes[5].style.transform = 'translateY(-62px)';
//     elem.childNodes[5].style.transition = 'all 0.9s ease';
//   })
//     })
//     divs.forEach(function(elem){
//       elem.addEventListener("mouseleave",function(){
//         elem.childNodes[5].style.transform = 'translateY(0px)';
//         elem.childNodes[5].style.transition = 'all 0.9s ease';

//       })
//         })
    
//         var divs2 = document.querySelectorAll("#page6-right")
// divs2.forEach(function(elem){
//   elem.addEventListener("mouseenter",function(){
//     elem.childNodes[5].style.transform = 'translateY(-75px)';
//     elem.childNodes[5].style.transition = 'all 0.9s ease';

//   })
//     })
//     divs2.forEach(function(elem){
//       elem.addEventListener("mouseleave",function(){
//         elem.childNodes[5].style.transform = 'translateY(0px)';
//         elem.childNodes[5].style.transition = 'all 0.9s ease';



//       })
//         })

// For #page6-left
// For #page6-left
// Function to apply clip-path transition
function applyClipPathTransition(img, clipPathValue) {
  img.style.clipPath = clipPathValue; // Set the desired clip-path value
  img.style.transition = 'clip-path 0.9s ease'; // Ensure smooth transition
}

// Apply initial clip-path when page loads
function setInitialClipPath() {
  var images = document.querySelectorAll("#page6-left img, #page6-right img");
  images.forEach(function(img) {
    applyClipPathTransition(img, 'inset(20% 0% 0% 0%)'); // Initially clipped
  });
}

// For #page6-left
var divs = document.querySelectorAll("#page6-left");
divs.forEach(function(elem) {
  var img = elem.querySelector('img'); // Select the image element

  elem.addEventListener("mouseenter", function() {
    applyClipPathTransition(img, 'none'); // Restore full image visibility
  });

  elem.addEventListener("mouseleave", function() {
    applyClipPathTransition(img, 'inset(20% 0% 0% 0%)'); // Reapply clipping effect
  });
});

// For #page6-right
var divs2 = document.querySelectorAll("#page6-right");
divs2.forEach(function(elem) {
  var img = elem.querySelector('img'); // Select the image element

  elem.addEventListener("mouseenter", function() {
    applyClipPathTransition(img, 'none'); // Restore full image visibility
  });

  elem.addEventListener("mouseleave", function() {
    applyClipPathTransition(img, 'inset(20% 0% 0% 0%)'); // Reapply clipping effect
  });
});

// Set initial clip-path when page loads
window.addEventListener('load', setInitialClipPath);



    
  
}
function page8animation(){
  gsap.from("#btm8-part2 h4",{
    x:0,
    duration:1,
    scrollTrigger:{
      trigger:"#btm8-part2",
      scroller:"#main",
      // markers:true,
      start:"top 80%",
      end:"top 10%",
      scrub:true
    }
  })
  gsap.from("#btm8-part3 h4",{
    x:0,
    duration:1,
    scrollTrigger:{
      trigger:"#btm8-part3",
      scroller:"#main",
      // markers:true,
      start:"top 80%",
      end:"top 10%",
      scrub:true
    }
  })
  gsap.from("#btm8-part4 h4",{
    x:0,
    duration:1,
    scrollTrigger:{
      trigger:"#btm8-part4",
      scroller:"#main",
      // markers:true,
      start:"top 80%",
      end:"top 10%",
      scrub:true
    }
  })
}



locomotiveAnimation();
page2Animation();
navAnimation();
page3VideoAnimation();
page5animation()
page6animation()
page8animation()
loadingAnimation()
