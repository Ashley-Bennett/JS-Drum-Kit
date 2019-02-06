// Play drum by keyboard press

let play = () => {
    let key = event.key
    if (key == "a"){
        let sound = document.getElementById("boom")
        sound.play()
    } else if (key == "s"){
        let sound = document.getElementById("clap")
        sound.play()
    } else if (key == "d"){
        let sound = document.getElementById("hihat")
        sound.play()
    } else if (key == "f"){
        let sound = document.getElementById("kick")
        sound.play()
    } else if (key == "g"){
        let sound = document.getElementById("openhat")
        sound.play()
    } else if (key == "h"){
        let sound = document.getElementById("ride")
        sound.play()
    } else if (key == "j"){
        let sound = document.getElementById("snare")
        sound.play()
    } else if (key == "k"){
        let sound = document.getElementById("tink")
        sound.play()
    } else if (key == "l"){
        let sound = document.getElementById("tom")
        sound.play()
    }
}

// Play music by mouse click

let boom = () => {
    let sound = document.getElementById("boom")
    sound.play()
}
let clap = () => {
    let sound = document.getElementById("clap")
    sound.play()
}
let hihat = () => {
    let sound = document.getElementById("hihat")
    sound.play()
}
let kick = () => {
    let sound = document.getElementById("kick")
    sound.play()
}
let openhat = () => {
    let sound = document.getElementById("openhat")
    sound.play()
}
let ride = () => {
    let sound = document.getElementById("ride")
    sound.play()
}
let snare = () => {
    let sound = document.getElementById("snare")
    sound.play()
}
let tink = () => {
    let sound = document.getElementById("tink")
    sound.play()
}
let tom = () => {
    let sound = document.getElementById("tom")
    sound.play()
}