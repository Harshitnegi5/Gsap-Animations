gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded",()=>{
    ScrollTrigger.create({
        trigger:".wrapper",
        start:"top top",
        end:"+=900vh",
        markers:true,
        scrub:1,
        pin:true,    
        onUpdate : (self)=>{
            gsap.to(".wrapper",{
                x:`${-350  * self.progress}vw`,
                duration:.5,
                ease:"power3.out"
            })

        }

    })
})