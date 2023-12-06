const exercises = [
  "Squat",
  "Weight training",
  "Sit ups",
  "Push Ups",
  "Jogging",
  "Chunches",
  "Plank",
  "Side Plank",
  // เพิ่มการออกกำลังกายเพิ่มเติมตามต้องการ
];

// ฟังก์ชันสุ่มการออกกำลังกาย
function randomExercise() {
  const randomIndex = Math.floor(Math.random() * exercises.length);
  return exercises[randomIndex];
}
function randomExercise2() {
  const randomIndex = Math.floor(Math.random() * exercises.length);
  return exercises[randomIndex];
}
function randomExercise3() {
  const randomIndex = Math.floor(Math.random() * exercises.length);
  return exercises[randomIndex];
}


function outputQuest() {
let random = Math.floor(Math.random()*40)
let random2 = Math.floor(Math.random()*40)
let random3 = Math.floor(Math.random()*40)


const exercise = randomExercise();
const exercise2 = randomExercise2();
const exercise3 = randomExercise3();
if (random==0) {
    random = Math.floor(Math.random()*40)
}
if (random2==0) {
    random2 = Math.floor(Math.random()*40)
}
if (random3==0) {
    random3 = Math.floor(Math.random()*40)
}

document.getElementById('Quest1').innerHTML = exercise
document.getElementById('Quest1n').innerHTML = random
document.getElementById('Quest2').innerHTML = exercise2
document.getElementById('Quest2n').innerHTML = random2
document.getElementById('Quest3').innerHTML = exercise3
document.getElementById('Quest3n').innerHTML = random3
} 

let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startTimer() {

  timer = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(timer);
  document.getElementById('showtime').innerHTML = (`Your time used : ${hours}:${minutes}:${seconds}`);
  if (hours==0, minutes==0, seconds==0 ) {
  document.getElementById('forsomeone').innerHTML = "Bro's lazy to exercise lol , i know:)"
}else if (minutes<1) {
  document.getElementById('forsomeone').innerHTML = "Are you The flash?"
}else {
  document.getElementById('forsomeone').innerHTML = "Is this easy right?:D"
}
  
}

function updateTimer() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;

    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  document.getElementById('Time').innerHTML = (`Time : ${hours}:${minutes}:${seconds}`);
}
function resetTimer() {
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  hours = 0;
}


document.getElementById("Complete").addEventListener("click", function() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    
    var closeBtn = modal.getElementsByClassName("close")[0];
    closeBtn.addEventListener("click", function() {
      modal.style.display = "none";
    });
  
});
