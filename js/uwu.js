const s = (p) => {
  let img, audio, playBtn, toggleBtn;

  // Preload function to load the image and audio
  p.preload = () => {
    img = p.loadImage("img/1.jpg"); // Make sure you have an image at this path
    audio = p.loadSound("audio/uwu.mp3"); // Make sure you have an audio file at this path
  };

  // Setup function to initialize the canvas, buttons, and audio controls
  p.setup = () => {
    // Create the canvas with WEBGL
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    p.imageMode(p.CENTER); // Center the image

    // Set up the play button interaction
    playBtn = document.querySelector("#play-btn");
    playBtn.addEventListener("click", () => {
      document.body.classList.add("start-anim"); // Optionally add a class to body for animations
      audio.loop(); // Start the audio loop
    });

    // Set up the toggle button interaction
    toggleBtn = document.querySelector("#toggle-btn");
    toggleBtn.addEventListener("click", () => {
      toggleBtn.classList.toggle("toggle--on");
      toggleAudio(); // Toggle the audio play/pause
    });
  };

  // Draw function to render the image and keep it static
  p.draw = () => {
    p.background(0); // Set the background to black
    p.image(img, 0, 0, p.width, p.height); // Draw the image centered on the canvas
  };

  // Window resize function to adjust the canvas size on window resize
  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight); // Resize the canvas to fit the new window size
  };

  // Function to toggle audio play/pause
  const toggleAudio = () => {
    if (audio.isPlaying()) {
      audio.pause(); // Pause the audio if it is currently playing
    } else {
      audio.loop(); // Loop the audio if it is not playing
    }
  };
};

// Initialize the p5 sketch
new p5(s);
