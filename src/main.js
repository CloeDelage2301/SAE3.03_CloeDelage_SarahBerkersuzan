document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // SLIDE 1
    gsap.from('.slide-1 .slide-title', {
        scrollTrigger: {
            trigger: '.slide-1',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.slide-1 .slide-text', {
        scrollTrigger: {
            trigger: '.slide-1',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out'
    });


    // SLIDE 2
    ScrollTrigger.create({
        trigger: '.slide-2',
        start: 'top 60%',
        onEnter: () => {
            const count = { val: 0 };
            gsap.to(count, {
                val: 4.3,
                duration: 2,
                ease: 'power2.out',
                onUpdate: () => {
                    document.querySelector('.slide-2__number').textContent =
                        count.val.toFixed(1) + ' Millions';
                }
            });
        }
    });

    ScrollTrigger.create({
        trigger: '.slide-2',
        start: 'top 70%',
        onEnter: () => {
            gsap.from('#tas-dechets', {
                y: -300,
                opacity: 0,
                duration: 0.8,
                ease: 'power2.in',
                onComplete: () => {

                    gsap.to('.slide-2', {
                        x: -10,
                        duration: 0.05,
                        repeat: 15,
                        yoyo: true,
                        ease: 'power1.inOut',
                        onComplete: () => {
                            gsap.set('.slide-2', { x: 0 });
                        }
                    });

                    gsap.to('#tas-dechets', {
                        y: -20,
                        duration: 0.15,
                        yoyo: true,
                        repeat: 3,
                        ease: 'power1.out'
                    });
                }
            });
        }
    });

    gsap.from('.slide-2__intro', {
        scrollTrigger: {
            trigger: '.slide-2',
            start: 'top 65%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });

    gsap.from('#mister-brocoli', {
        scrollTrigger: {
            trigger: '.slide-2',
            start: 'top 10%',
            toggleActions: 'play none none reverse'
        },
        y: -200,
        rotation: -180,
        opacity: 0,
        duration: 1.5,
        delay: 0.5,
        ease: 'bounce.out'
    });
    // SLIDE 3
    const slide3Number = document.querySelector('.slide-3__number');
    if (slide3Number) {
        ScrollTrigger.create({
            trigger: '.slide-3',
            start: 'top 60%',
            onEnter: () => {
                let count = { val: 0 };
                gsap.to(count, {
                    val: 46,
                    duration: 2,
                    ease: 'power2.out',
                    onUpdate: function () {
                        slide3Number.textContent = Math.round(count.val) + '%';
                    }
                });
            }
        });
    }


    gsap.from('.slide-3__house', {
        scrollTrigger: {
            trigger: '.slide-3',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.slide-3_Texte p', {
        scrollTrigger: {
            trigger: '.slide-3',
            start: 'top 60%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });


    // SLIDE 4


    gsap.from('.slide-4__text-top', {
        scrollTrigger: {
            trigger: '.slide-4',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: -30,
        duration: 0.8,
        ease: 'power3.out'
    });

    gsap.from('.slide-4__image', {
        scrollTrigger: {
            trigger: '.slide-4',
            start: 'top 60%',
            toggleActions: 'play none none reverse'
        },
        scale: 0,
        rotation: 360,
        opacity: 0,
        duration: 1.5,
        ease: 'back.out(1.7)'
    });

    gsap.from('.slide-4__text-bottom', {
        scrollTrigger: {
            trigger: '.slide-4',
            start: 'top 50%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.5,
        ease: 'power3.out'
    });



    // SLIDE 5-6-7-8

    const percentageSlides = [
        { selector: '.slide-5__number', value: 22 },
        { selector: '.slide-6__number', value: 14 },
        { selector: '.slide-7__number', value: 12 },
        { selector: '.slide-8__number', value: 52 }
    ];

    percentageSlides.forEach(slide => {
        const element = document.querySelector(slide.selector);
        if (element) {
            ScrollTrigger.create({
                trigger: element.closest('section'),
                start: 'top 60%',
                onEnter: () => {
                    let count = { val: 0 };
                    gsap.to(count, {
                        val: slide.value,
                        duration: 2,
                        ease: 'power2.out',
                        onUpdate: function () {
                            element.textContent = Math.round(count.val) + '%';
                        }
                    });
                }
            });
        }
    });

    ['.slide-5', '.slide-6', '.slide-7', '.slide-8'].forEach((slideClass, index) => {
        gsap.from(`${slideClass}__image`, {
            scrollTrigger: {
                trigger: slideClass,
                start: 'top 60%',
                toggleActions: 'play none none reverse'
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });

        gsap.from(`${slideClass}__title`, {
            scrollTrigger: {
                trigger: slideClass,
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            },
            x: -50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        });

        gsap.from(`${slideClass}__text`, {
            scrollTrigger: {
                trigger: slideClass,
                start: 'top 65%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: 0.3,
            ease: 'power3.out'
        });
    });


    // SLIDE 9

    const slide9Percentage = document.querySelector('.slide-9__percentage');
    if (slide9Percentage) {
        ScrollTrigger.create({
            trigger: '.slide-9',
            start: 'top 60%',
            onEnter: () => {
                let count = { val: 0 };
                gsap.to(count, {
                    val: 4.4,
                    duration: 2,
                    ease: 'power2.out',
                    onUpdate: function () {
                        slide9Percentage.textContent = count.val.toFixed(1) + '%';
                    }
                });
            }
        });
    }

    gsap.from('.slide-9__dish-left', {
        scrollTrigger: {
            trigger: '.slide-9',
            start: 'top 60%',
            toggleActions: 'play none none reverse'
        },
        x: -100,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    });

    gsap.from('.slide-9__dish-center', {
        scrollTrigger: {
            trigger: '.slide-9',
            start: 'top 60%',
            toggleActions: 'play none none reverse'
        },
        scale: 0,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: 'back.out(1.7)'
    });

    gsap.from('.slide-9__broccoli', {
        scrollTrigger: {
            trigger: '.slide-9',
            start: 'top 60%',
            toggleActions: 'play none none reverse'
        },
        x: 100,
        rotation: 180,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: 'power3.out'
    });

    gsap.from('.slide-9__intro', {
        scrollTrigger: {
            trigger: '.slide-9',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: -30,
        duration: 0.8,
        ease: 'power3.out'
    });


    gsap.from('.slide-9__per-an', {
        scrollTrigger: {
            trigger: '.slide-9',
            start: 'top 65%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: 0.3,
        ease: 'power3.out'
    });

    gsap.from('.slide-9__description', {
        scrollTrigger: {
            trigger: '.slide-9',
            start: 'top 50%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.5,
        ease: 'power3.out'
    });

    // SLIDE 10
    const slide10Percentage = document.querySelector('.slide-10__percentage');
    if (slide10Percentage) {
        ScrollTrigger.create({
            trigger: '.slide-10',
            start: 'top 60%',
            onEnter: () => {
                let count = { val: 0 };
                gsap.to(count, {
                    val: 1.2,
                    duration: 2,
                    ease: 'power2.out',
                    onUpdate: function () {
                        slide10Percentage.textContent = count.val.toFixed(1) + ' M';
                    }
                });
            }
        });
    }

    gsap.from('.slide-10__dish-center', {
        scrollTrigger: {
            trigger: '.slide-10',
            start: 'top 60%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1.5,
        ease: 'power1.inOut'
    });


    gsap.from('.slide-10__intro', {
        scrollTrigger: {
            trigger: '.slide-10',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: -30,
        duration: 0.8,
        ease: 'power3.out'
    });

    gsap.from('.slide-10__per-an', {
        scrollTrigger: {
            trigger: '.slide-10',
            start: 'top 65%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: 0.3,
        ease: 'power3.out'
    });

    gsap.from('.slide-10__description', {
        scrollTrigger: {
            trigger: '.slide-10',
            start: 'top 50%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.5,
        ease: 'power3.out'
    });

    // SLIDE 11

    const slide11Text = document.querySelector('.slide-11_text');
    if (slide11Text) {
        const words = slide11Text.textContent.split(' ');
        slide11Text.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(' ');

        gsap.from('.slide-11 .word', {
            scrollTrigger: {
                trigger: '.slide-11',
                start: 'top 60%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 0.5,
            ease: 'power2.out'
        });
    }

    // SLIDE 12

    gsap.from('.slide-12__text-main', {
        scrollTrigger: {
            trigger: '.slide-12',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out'
    });

    gsap.from('.slide-12__text-sub', {
        scrollTrigger: {
            trigger: '.slide-12',
            start: 'top 65%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.3,
        ease: 'power3.out'
    });

    gsap.from('.slide-12__greenhouse', {
        scrollTrigger: {
            trigger: '.slide-12',
            start: 'top 60%',
            toggleActions: 'play none none reverse'
        },
        scale: 0.5,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
    });

    gsap.from('.slide-12__broccoli', {
        scrollTrigger: {
            trigger: '.slide-12',
            start: 'top 50%',
            toggleActions: 'play none none reverse'
        },
        y: 100,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: 'bounce.out'
    });


    // SLIDE 13
    gsap.from('.slide-13__title', {
        scrollTrigger: {
            trigger: '.slide-13',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out'
    });

    gsap.from('.slide-13__text', {
        scrollTrigger: {
            trigger: '.slide-13',
            start: 'top 65%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.3,
        ease: 'power3.out'
    });

    gsap.from('.slide-13__image', {
        scrollTrigger: {
            trigger: '.slide-13',
            start: 'top 60%',
            toggleActions: 'play none none reverse'
        },
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out'
    });


    // SLIDE 14

    gsap.from('.slide-14__title', {
        scrollTrigger: {
            trigger: '.slide-14',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out'
    });

    gsap.from('.slide-14__text', {
        scrollTrigger: {
            trigger: '.slide-14',
            start: 'top 65%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.3,
        ease: 'power3.out'
    });

    gsap.from('.slide-14__figure', {
        scrollTrigger: {
            trigger: '.slide-14',
            start: 'top 60%',
            toggleActions: 'play none none reverse'
        },
        scale: 0.5,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: 'back.out(1.7)'
    });

    // SLIDE 15

    gsap.from('.slide-15__title', {
        scrollTrigger: {
            trigger: '.slide-15',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out'
    });

    gsap.from('.slide-15__subtitle', {
        scrollTrigger: {
            trigger: '.slide-15',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: 50,
        duration: 0.8,
        ease: 'power3.out'
    });

    gsap.from('.slide-15__figure', {
        scrollTrigger: {
            trigger: '.slide-15',
            start: 'top 60%',
            toggleActions: 'play none none reverse'
        },
        scale: 0,
        rotation: 360,
        opacity: 0,
        duration: 1.5,
        ease: 'back.out(1.7)'
    });

    gsap.from('.slide-15__text', {
        scrollTrigger: {
            trigger: '.slide-15',
            start: 'top 55%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.5,
        ease: 'power3.out'
    });

    // SLIDE 16

    gsap.from('.slide-16__title', {
        scrollTrigger: {
            trigger: '.slide-16',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: 'back.out(1.7)'
    });

    gsap.from('.slide-16__text', {
        scrollTrigger: {
            trigger: '.slide-16',
            start: 'top 65%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.3,
        ease: 'power3.out'
    });

    gsap.from('.slide-16__image', {
        scrollTrigger: {
            trigger: '.slide-16',
            start: 'top 60%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        scale: 1.5,
        duration: 1.2,
        ease: 'power3.out'
    });


    // SLIDE 17

    gsap.from('.slide-17__title', {
        scrollTrigger: {
            trigger: '.slide-17',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: 'back.out(1.7)'
    });

    gsap.from('.slide-17__text', {
        scrollTrigger: {
            trigger: '.slide-17',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: -30,
        duration: 0.8,
        ease: 'power3.out'
    });

    gsap.from('.slide-17__image', {
        scrollTrigger: {
            trigger: '.slide-17',
            start: 'top 60%',
            toggleActions: 'play none none reverse'
        },
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'bounce.out'
    });

    // SLIDE 18
    gsap.from('.slide-18__figure', {
        scrollTrigger: {
            trigger: '.slide-18',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.slide-18__header .slide-18__text:first-child', {
        scrollTrigger: {
            trigger: '.slide-18',
            start: 'top 65%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out'
    });

    const slide18Percentage = document.querySelector('.slide-18__percentage');
    if (slide18Percentage) {
        ScrollTrigger.create({
            trigger: '.slide-18',
            start: 'top 60%',
            onEnter: () => {
                let count = { val: 0 };
                gsap.to(count, {
                    val: 61,
                    duration: 2,
                    ease: 'power2.out',
                    onUpdate: function () {
                        slide18Percentage.textContent = Math.round(count.val) + '%';
                    }
                });
            }
        });
    }

    gsap.from('.slide-18__description', {
        scrollTrigger: {
            trigger: '.slide-18',
            start: 'top 55%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.5,
        ease: 'power3.out'
    });



    // SLIDE 19
    gsap.from('.slide-19__title', {
        scrollTrigger: {
            trigger: '.slide-19',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out'
    });

    const slide19Chiffre = document.querySelector('.slide-19__chiffre');
    if (slide19Chiffre) {
        ScrollTrigger.create({
            trigger: '.slide-19',
            start: 'top 60%',
            onEnter: () => {
                let count = { val: 0 };
                gsap.to(count, {
                    val: 2.1,
                    duration: 2,
                    ease: 'power2.out',
                    onUpdate: function () {
                        slide19Chiffre.textContent = count.val.toFixed(1) + ' tonnes';
                    }
                });
            }
        });
    }

    gsap.from('.slide-19__figure', {
        scrollTrigger: {
            trigger: '.slide-19',
            start: 'top 60%',
            toggleActions: 'play none none reverse'
        },
        scale: 0,
        rotation: -180,
        opacity: 0,
        duration: 1.5,
        ease: 'back.out(1.7)'
    });

    gsap.from('.slide-19__subtitle', {
        scrollTrigger: {
            trigger: '.slide-19',
            start: 'top 50%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.5,
        ease: 'power3.out'
    });


    // SLIDE 20
    const slide20Text = document.querySelector('.slide-20_text');
    if (slide20Text) {
        gsap.from(slide20Text, {
            scrollTrigger: {
                trigger: '.slide-20',
                start: 'top 60%',
                toggleActions: 'play none none reverse'
            },
            scale: 0.5,
            opacity: 0,
            duration: 1,
            ease: 'back.out(1.7)'
        });
    }

    gsap.utils.toArray('.slide-2__brocoli, .slide-3__brocoli, .slide-12__broccoli').forEach(element => {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element.closest('section'),
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            },
            y: -50,
            ease: 'none'
        });
    });

});

