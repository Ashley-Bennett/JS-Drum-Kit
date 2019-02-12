// Play drum by keyboard press



let play = () => {
    let key = event.key;
    if (key == "a") {
      let sound = document.getElementById("boom");
      document.getElementById("boom1").classList.remove("playing")
      void document.getElementById("boom1").offsetWidth
      document.getElementById("boom1").classList.add("playing");
      if (sound.paused) {
        sound.play();

      } else {
        sound.currentTime = 0;
      }

    } else if (key == "s") {
      let sound = document.getElementById("clap");
      document.getElementById("clap1").classList.remove("playing")
      void document.getElementById("clap1").offsetWidth
      document.getElementById("clap1").classList.add("playing");
      if (sound.paused) {
        sound.play();
      } else {
        sound.currentTime = 0;
      }
      
    } else if (key == "d") {
      let sound = document.getElementById("hihat");
      document.getElementById("hihat1").classList.remove("playing")
      void document.getElementById("hihat1").offsetWidth
      document.getElementById("hihat1").classList.add("playing");
      if (sound.paused) {
        sound.play();
      } else {
        sound.currentTime = 0;
      }
    } else if (key == "f") {
      let sound = document.getElementById("kick");
      document.getElementById("kick1").classList.remove("playing")
      void document.getElementById("kick1").offsetWidth
      document.getElementById("kick1").classList.add("playing");
      if (sound.paused) {
        sound.play();
      } else {
        sound.currentTime = 0;
      }
    } else if (key == "g") {
      let sound = document.getElementById("openhat");
      document.getElementById("openhat1").classList.remove("playing")
      void document.getElementById("openhat1").offsetWidth
      document.getElementById("openhat1").classList.add("playing");
      if (sound.paused) {
        sound.play();
      } else {
        sound.currentTime = 0;
      }
    } else if (key == "h") {
      let sound = document.getElementById("ride");
      document.getElementById("ride1").classList.remove("playing")
      void document.getElementById("ride1").offsetWidth
      document.getElementById("ride1").classList.add("playing");
      if (sound.paused) {
        sound.play();
      } else {
        sound.currentTime = 0;
      }
    } else if (key == "j") {
      let sound = document.getElementById("snare");
      document.getElementById("snare1").classList.remove("playing")
      void document.getElementById("snare1").offsetWidth
      document.getElementById("snare1").classList.add("playing");
      if (sound.paused) {
        sound.play();
      } else {
        sound.currentTime = 0;
      }
    } else if (key == "k") {
      let sound = document.getElementById("tink");
      document.getElementById("tink1").classList.remove("playing")
      void document.getElementById("tink1").offsetWidth
      document.getElementById("tink1").classList.add("playing");
      if (sound.paused) {
        sound.play();
      } else {
        sound.currentTime = 0;
      }
    } else if (key == "l") {
      let sound = document.getElementById("tom");
      document.getElementById("tom1").classList.remove("playing")
      void document.getElementById("tom1").offsetWidth
      document.getElementById("tom1").classList.add("playing");
      if (sound.paused) {
        sound.play();
      } else {
        sound.currentTime = 0;
      }
    }
  };
  
  // Play music by mouse click
  
  let boom = () => {
    let sound = document.getElementById("boom");
    if (sound.paused) {
      sound.play();
    } else {
      sound.currentTime = 0;
    }
  };
  let clap = () => {
    let sound = document.getElementById("clap");
    if (sound.paused) {
      sound.play();
    } else {
      sound.currentTime = 0;
    }
  };
  let hihat = () => {
    let sound = document.getElementById("hihat");
    if (sound.paused) {
      sound.play();
    } else {
      sound.currentTime = 0;
    }
  };
  let kick = () => {
    let sound = document.getElementById("kick");
    if (sound.paused) {
      sound.play();
    } else {
      sound.currentTime = 0;
    }
  };
  let openhat = () => {
    let sound = document.getElementById("openhat");
    if (sound.paused) {
      sound.play();
    } else {
      sound.currentTime = 0;
    }
  };
  let ride = () => {
    let sound = document.getElementById("ride");
    if (sound.paused) {
      sound.play();
    } else {
      sound.currentTime = 0;
    }
  };
  let snare = () => {
    let sound = document.getElementById("snare");
    if (sound.paused) {
      sound.play();
    } else {
      sound.currentTime = 0;
    }
  };
  let tink = () => {
    let sound = document.getElementById("tink");
    if (sound.paused) {
      sound.play();
    } else {
      sound.currentTime = 0;
    }
  };
  let tom = () => {
    let sound = document.getElementById("tom");
    if (sound.paused) {
      sound.play();
    } else {
      sound.currentTime = 0;
    }
  };
  