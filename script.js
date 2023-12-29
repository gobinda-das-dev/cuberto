NavbarArising()
magnetEffect();




Shery.mouseFollower();
Shery.hoverWithMediaCircle(".js-hvr", {
  videos: ["videos/0.mp4", "videos/2.mp4", "videos/3.mp4"],
  mouseFollower: false,
});

gsap.to(".f-left-elem", {
  scrollTrigger: {
    trigger: ".featured main",
    pin: true,
    start: "top top",
    end: "top top",
    endTrigger: ".js-last",
    scrub: 1,
  },
  y: "-300%",
  ease: Power1
})




let sections = document.querySelectorAll(".f-left-elem");
Shery.imageEffect(".images", {
  style: 2,
  // debug: true,
  config: { "resolutionXY": { "value": 100 }, "distortion": { "value": true }, "mode": { "value": -3 }, "mousemove": { "value": 0 }, "modeA": { "value": 1 }, "modeN": { "value": 0 }, "speed": { "value": 1, "range": [-500, 500], "rangep": [-10, 10] }, "frequency": { "value": 50, "range": [-800, 800], "rangep": [-50, 50] }, "angle": { "value": 0.5, "range": [0, 3.141592653589793] }, "waveFactor": { "value": 1.4, "range": [-3, 3] }, "color": { "value": 10212607 }, "pixelStrength": { "value": 3, "range": [-20, 100], "rangep": [-20, 20] }, "quality": { "value": 5, "range": [0, 10] }, "contrast": { "value": 1, "range": [-25, 25] }, "brightness": { "value": 1, "range": [-1, 25] }, "colorExposer": { "value": 0.18, "range": [-5, 5] }, "strength": { "value": 0.2, "range": [-40, 40], "rangep": [-5, 5] }, "exposer": { "value": 8, "range": [-100, 100] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.762954494897442 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 3.7623930928374287 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.15, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
  slideStyle: (setScroll) => {
    sections.forEach((section, index) => {
      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: "top top",
          scrub: 1,
          onUpdate: (prog) => {
            setScroll(prog.progress + index)
          }
        }
      })
    });
  },
});











// some Important functions
function magnetEffect() {
  Shery.makeMagnet(".js-magnet");

  const menuIcon = document.querySelector(".menu-icon");
  const buttonDivs = document.querySelectorAll(".btn-div button");

  menuIcon.onmouseenter = () => {
    gsap.to(".mousefollower", {
      height: 15,
      width: 15,
      duration: 0
    })
  }
  menuIcon.onmouseleave = () => {
    gsap.to(".mousefollower", {
      height: 10,
      width: 10,
      duration: 0
    })
  }
  buttonDivs.forEach((buttonDiv) => {
    buttonDiv.onmouseenter = () => {
      gsap.to(".mousefollower", {
        height: 0,
        width: 0,
        duration: 0
      })
    }
    buttonDiv.onmouseleave = () => {
      gsap.to(".mousefollower", {
        height: 10,
        width: 10,
        duration: 0
      })
    }
  });
}

function NavbarArising() {
  let tl = gsap.timeline();
  let tl1 = gsap.timeline();
  const navMenu = document.querySelector(".menu-icon");

  let count = 1;
  navMenu.onclick = () => {
    const line1 = document.querySelector(".menu-icon .line:nth-child(1)");
    const line2 = document.querySelector(".menu-icon .line:nth-child(2)");
    let w = line2.clientWidth;
    let h = line2.clientHeight;



    // Disable scrolling
    document.body.style.overflow = "hidden";


    if (count) {
      count = 0;
      gsap.to(".menu-icon", {
        top: 30,
        right: 45,
      })

      tl1
        .to(".navbar-showcase", {
          width: "100%",
          duration: .5,
          ease: Power1,
        })
        .to(".n-r-top, n-r-bottom", {
          opacity: 1,
          duration: .5,
          delay: -.4,
          ease: Power1,
        })
        .to(".n-left", {
          opacity: 1,
          duration: .5,
          ease: Power1,
        })

      tl
        .to(line1, {
          width: 0,
          x: -w,
          duration: .2,
        })
        .to(line2, {
          width: 0,
          duration: .2,
          delay: -.2,
        })

        .to(line1, {
          rotate: 45,
          x: -w / 2,
          margin: -h,
          duration: 0,
        })
        .to(line2, {
          rotate: -45,
          margin: -h,
          x: w / 2,
          duration: 0,
        })

        .to(line1, {
          width: w,
          x: 0,
          duration: .3,
        })
        .to(line2, {
          width: w,
          x: 0,
          duration: .3,
        })
    } else {
      count = 1;
      gsap.to(".menu-icon", {
        top: 20,
        right: 35,
      })


      // Enable scrolling
      document.body.style.overflow = "";



      tl1
        .to(".n-left", {
          opacity: 0,
          duration: .1,
          ease: Power1,
        })
        .to(".n-r-top, n-r-bottom", {
          opacity: 0,
          duration: .5,
          ease: Power1,
        })
        .to(".navbar-showcase", {
          width: "0",
          duration: .5,
          delay: -.4,
          ease: Power1,
        })

      tl
        .to(line1, {
          rotate: 0,
          duration: .5,
        })
        .to(line2, {
          rotate: 0,
          duration: .5,
          delay: -.5
        })
        .to(line1, {
          margin: 2 * h,
          duration: .5,
        })
        .to(line2, {
          margin: 2 * h,
          duration: .5,
          delay: -.5
        })
    }
  }


  //Menu Hover mouse follower
  document.querySelectorAll(".n-r-top a").forEach((anchorTags) => {
    anchorTags.onmouseenter = () => {
      gsap.to(".mousefollower", {
        scale: 6,
        ease: Power2,
        duration: 0.5,
      })
    }
    anchorTags.onmouseleave = () => {
      gsap.to(".mousefollower", {
        scale: 1,
        ease: Power2,
        duration: 0.5,
      })
    }
  })
}
