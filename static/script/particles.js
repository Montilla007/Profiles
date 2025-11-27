particlesJS("particles-bg", {
  particles: {
    number: {
      value: 80, // Adjust the number of particles
      density: {
        enable: true,
        value_area: 500, // Adjust the area in which particles are distributed
      },
    },
    color: {
      value: ["#ffffff"], // Set the color of particles
    },
    shape: {
      type: ["circle", "triangle", "square"], // You can use other shapes like "triangle", "polygon", etc.
      stroke: {
        width: 0,
      },
      polygon: {
        nb_sides: 4,
      },
    },
    opacity: {
      value: 0.5, // Set the opacity of particles
      random: false,
      anim: {
        enable: false,
        speed: 0.5,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 8, // Adjust the size of particles
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 50, // radius of repulse effect
        duration: 0.4, // duration of particle movement
      },
      push: {
        particles_nb: 4, // number of particles added on click
      },
      remove: {
        particles_nb: 4, // number of particles removed on click
      },
    },
  },
});
