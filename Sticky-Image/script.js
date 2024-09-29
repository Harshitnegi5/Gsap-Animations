gsap.registerPlugin(ScrollTrigger);


document.addEventListener("DOMContentLoaded",()=>{

    const footer = document.querySelector(".footer");
    const lastcard = document.querySelector(".cards.scroll")
    const pinnedcard = gsap.utils.toArray(".pinned") 

    pinnedcard.forEach((section,index,sections)=>{
       
        
        let img = section.querySelector(".img");

        let nextsection = sections[index + 1] || lastcard;
        let endScalePoint = `top+=${nextsection.offsetTop - section.offsetTop} top`;

        gsap.to(section,{
            scrollTrigger:{
                trigger:section,
                start:"top top",
                end:index === sections.length ? `+=${lastcard.offsetHeight /2}` : footer.offsetTop - window.innerHeight,
                pin:true,
                pinSpacing:false,
                scrub:1
            }
        })

        gsap.fromTo(img,{scale:1},{
            scale:.7,
            ease:"none",
            scrollTrigger:{
                trigger:section,
                start:"top top",
                end:endScalePoint,
                scrub:1,

            }
        })
    })

    
})