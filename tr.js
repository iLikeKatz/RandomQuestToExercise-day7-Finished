let exercises = [
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


function ifno() {
  let modal2 = document.getElementById("myModalUnlock4");
  modal2.style.display = 'none';
}

function ifyes() {
  document.getElementById('Quest4').innerHTML = 'Quest4'
  let modal2 = document.getElementById("myModalUnlock4");
  modal2.style.display = 'none';
  let q4 =  document.getElementById('Quest4')
  q4.setAttribute('class', 'Unlockq4')
  let q4n = document.getElementById('Quest4n')
  q4n.setAttribute('class', 'Unlockq4n')
}

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
function randomExercise4() {
  const randomIndex = Math.floor(Math.random() * exercises.length);
  return exercises[randomIndex];
}


function outputQuest() {
let random = Math.floor(Math.random()*40)
let random2 = Math.floor(Math.random()*40)
let random3 = Math.floor(Math.random()*40)
let random4 = Math.floor(Math.random()*40)


const exercise = randomExercise();
const exercise2 = randomExercise2();
const exercise3 = randomExercise3();
const exercise4 = randomExercise4();

if (random==0) {
    random = Math.floor(Math.random()*40)
}
if (random2==0) {
    random2 = Math.floor(Math.random()*40)
}
if (random3==0) {
    random3 = Math.floor(Math.random()*40)
}
if (random4==0) {
    random4 = Math.floor(Math.random()*40)
}


document.getElementById('Quest1').innerHTML = exercise
document.getElementById('Quest1n').innerHTML = random
document.getElementById('Quest2').innerHTML = exercise2
document.getElementById('Quest2n').innerHTML = random2
document.getElementById('Quest3').innerHTML = exercise3
document.getElementById('Quest3n').innerHTML = random3

let q4class = document.getElementById('Quest4')
if (q4class.className == 'Unlockq4') {
document.querySelector('.Unlockq4').innerHTML = exercise4
document.querySelector('.Unlockq4n').innerHTML = random4
  }
};

function addexcfunc() {
  let exclist = addexc.value
  exercises.push(exclist);
  document.getElementById('youadd').innerHTML += (`${exclist} &nbsp; &nbsp; &nbsp; &nbsp;`);
  addexc.value = "";
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
    let modal = document.getElementById("myModal");
    modal.style.display = "block";
    
    let closeBtn = modal.getElementsByClassName("close")[0];
    closeBtn.addEventListener("click", function() {
      modal.style.display = "none";
    });
  
});

function showunlock() {
  let modal2 = document.getElementById("myModalUnlock4");
  modal2.style.display = "block";
  
  let closeBtn2 = modal2.getElementsByClassName("close")[0];
  closeBtn2.addEventListener("click", function() {
    modal2.style.display = "none";
  });
};

function Showset() {
  let modal3 = document.getElementById("myModalShowset");
  modal3.style.display = "block";
  
  let closeBtn3 = modal3.getElementsByClassName("close")[0];
  closeBtn3.addEventListener("click", function() {
    modal3.style.display = "none";
  });
};
