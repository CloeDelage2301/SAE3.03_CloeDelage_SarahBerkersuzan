// gsap.registerPlugin(ScrollTrigger);

// // Animation Slide 2
// gsap.set("#tas-dechets", { y: "-120%" });
// gsap.set("#mister-brocoli", { opacity: 0, y: -50 });

// const tl2 = gsap.timeline({
//     scrollTrigger: {
//         trigger: "#section-slide-2",
//         start: "top 20%",
//         toggleActions: "play none none reverse"
//     }
// });

// tl2.to("#tas-dechets", { y: "0%", duration: 0.6, ease: "power2.in" })
//     .to("#section-slide-2", { x: -10, duration: 0.05, repeat: 10, yoyo: true })
//     .to("#mister-brocoli", { opacity: 1, y: 0, duration: 0.4, ease: "back.out(2)" }, "-=0.3");

// // Animation Slide 3 (Apparition Brocoli assis)
// gsap.to("#brocoli-assi", {
//     opacity: 1,
//     duration: 1,
//     scrollTrigger: {
//         trigger: ".slide-3",
//         start: "top center",
//         toggleActions: "play none none reverse"
//     }
// });