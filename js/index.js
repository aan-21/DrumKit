function makeSound(key) {
  var sound;
  if (key == 'w') {
    sound = new Audio('./sounds/crash.mp3');
  } else if (key == 'a') {
    sound = new Audio('/sounds/kick-bass.mp3');
  } else if (key == 's') {
    sound = new Audio('/sounds/snare.mp3');
  } else if (key == 'd') {
    sound = new Audio('/sounds/tom-1.mp3');
  } else if (key == 'j') {
    sound = new Audio('/sounds/tom-2.mp3');
  } else if (key == 'k') {
    sound = new Audio('/sounds/tom-3.mp3');
  } else if (key == 'l') {
    sound = new Audio('/sounds/tom-4.mp3');
  } else {
    console.log();
  }
  sound.play();
}

function buttonAnimation(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed")
  }, 100);
}

var doc = document.querySelectorAll(".drum");

document.addEventListener("keydown", function(event) {
  var key = event.key;
  console.log(key);
  makeSound(key);
  buttonAnimation(key);
});

for (i = 0; i < doc.length; i++) {
  doc[i].addEventListener("click", function(event) {
    var key = this.innerHTML;
    makeSound(key);
    buttonAnimation(key);
  });
}
