// Play drum by keyboard press



let play = () => {
    let key = event.key;
    if (key == "a") {
      let sound = document.getElementById("boom");
      // let shrink = document.getElementById("boom1").style;
      
      if (sound.paused) {
        sound.play();
        document.getElementById("boom1").style.transform = "scale(0.9)";
        key.classList.remove('playing');

        // document.getElementById("boom1").style.transform = "scale(1.0)";
      } else {
        sound.currentTime = 0;
        key.classList.add('playing');

      }
      
      // key.classList.add('playing');

    } else if (key == "s") {
      let sound = document.getElementById("clap");
      if (sound.paused) {
        sound.play();
      } else {
        sound.currentTime = 0;
      }
    } else if (key == "d") {
      let sound = document.getElementById("hihat");
      if (sound.paused) {
        sound.play();
      } else {
        sound.currentTime = 0;
      }
    } else if (key == "f") {
      let sound = document.getElementById("kick");
      if (sound.paused) {
        sound.play();
      } else {
        sound.currentTime = 0;
      }
    } else if (key == "g") {
      let sound = document.getElementById("openhat");
      if (sound.paused) {
        sound.play();
      } else {
        sound.currentTime = 0;
      }
    } else if (key == "h") {
      let sound = document.getElementById("ride");
      if (sound.paused) {
        sound.play();
      } else {
        sound.currentTime = 0;
      }
    } else if (key == "j") {
      let sound = document.getElementById("snare");
      if (sound.paused) {
        sound.play();
      } else {
        sound.currentTime = 0;
      }
    } else if (key == "k") {
      let sound = document.getElementById("tink");
      if (sound.paused) {
        sound.play();
      } else {
        sound.currentTime = 0;
      }
    } else if (key == "l") {
      let sound = document.getElementById("tom");
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
  