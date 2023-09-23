// ScrollTrigger.normalizeScroll(true)

// // create the smooth scroller FIRST!
// let smoother = ScrollSmoother.create({
//   smooth: 2,
//   effects: true,
//   normalizeScroll: true
// });

// // pin box-c when it reaches the center of the viewport, for 300px
// ScrollTrigger.create({
//   trigger: ".scroll_box",
//   pin: true,
//   start: "center center",
//   end: "+=300",
//   markers: true
// });

// document.querySelector("button").addEventListener("click", e => {
//   // scroll to the spot where .box-c is in the center.
//   // parameters: element, smooth, position
//   smoother.scrollTo(".scroll_box", true, "center center");
  
//   // or you could animate the scrollTop:
//   // gsap.to(smoother, {
//   //  scrollTop: smoother.offset(".box-c", "center center"),
//   //  duration: 1
//   // });
// });

// const ourText = new splitType('p.our-text', { types: 'chars' })
// const chars = ourText.chars

// gsap.fromTo(
//   chars,
//   { 
//     y: 100,
//     opacity: 0
//   },
//   {
//     y: 0,
//     opacity: 1,
//     stagger: 0.05,
//     duration: 2,
//     ease: 'power2.out',
//   }
// )


let regBtns = document.querySelectorAll('.regBtn');
let modal = document.querySelector('#regModal');

regBtns.forEach(e=>{
    e.addEventListener('click',(e)=>{
        console.log("Hell");
        if (modal.classList.contains("hidden")) {
            modal.classList.remove('hidden');
    
        } else {
            modal.classList.add('hidden');
        }
    })
    
})



let paths  = document.querySelectorAll('.svgScroll');
let pathData = [];
for (let i = 0; i < paths.length; i++) {

    let item  = {
        pathLength: paths[i].getTotalLength(),
    }
    pathData.push(item);
    paths[i].style.strokeDasharray = item.pathLength + " " + item.pathLength;
    paths[i].style.strokeDashoffset = item.pathLength;
}
const handleScroll = ()=>{
    let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop)/(document.documentElement.scrollHeight - document.documentElement.clientHeight)
    for (let i = 0;i < pathData.length;i++) {
        let drawLength = pathData[i].pathLength * scrollPercentage;
        paths[i].style.strokeDashoffset = pathData[i].pathLength - drawLength;
    }
}

window.addEventListener('scroll',handleScroll)
// const observer = new IntersectionObserver(onIntersection, observerOptions);

