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
var nofex = 25;
var notlowthan = 10;

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
  let random = Math.floor(Math.random()*nofex)
  let random2 = Math.floor(Math.random()*nofex)
  let random3 = Math.floor(Math.random()*nofex)
  let random4 = Math.floor(Math.random()*nofex)


  const exercise = randomExercise();
  const exercise2 = randomExercise2();
  const exercise3 = randomExercise3();
  const exercise4 = randomExercise4();

   while (random<notlowthan) {
    random = Math.floor(Math.random()*nofex)
      }
   while (random2<notlowthan) {
    random2 = Math.floor(Math.random()*nofex)
      }
   while (random3<notlowthan) {
    random3 = Math.floor(Math.random()*nofex)
      }
   while (random4<notlowthan) {
    random4 = Math.floor(Math.random()*nofex)
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

function ShowList() {
  let modal3 = document.getElementById("myModalShowset");
    modal3.style.display = "none";

  let modal5 = document.getElementById('myModalMode');
  modal5.style.display = "none";

  let modal4 = document.getElementById('myModalList');
  modal4.style.display = "block";
  
  let closeBtn4 = modal4.getElementsByClassName("close")[0];
  closeBtn4.addEventListener("click", function() {
    modal4.style.display = "none";
  });
}

function ShowMode() {

  let modal3 = document.getElementById("myModalShowset");
    modal3.style.display = "none";

  let modal4 = document.getElementById('myModalList');
  modal4.style.display = "none";

  let modal5 = document.getElementById('myModalMode');
  modal5.style.display = "block";
  
  let closeBtn5 = modal5.getElementsByClassName("close")[0];
  closeBtn5.addEventListener("click", function() {
    modal5.style.display = "none";
  });
}


function checkLength() {
let input = document.getElementById('addexc');
let inputLength = input.value.length;
  if (inputLength >= 30) {
    alert('max length');
  }
}

function removeSq() {
  const exerciseIndex = exercises.indexOf('Squat');
  if (confirm('Wanna delete squats?')) {
    if (exercises.length<=1) {
      alert('Plese add your exercise list first')
    }else {
    exercises.splice(exerciseIndex, 1);
    document.getElementById('sq').remove();
    alert('Squat deleted.')
  }}
}

function removeWt() {
  const exerciseIndex = exercises.indexOf('Weight training');
  if (confirm('Wanna delete Weight training?')) {
    if (exercises.length<=1) {
      alert('Plese add your exercise list first')
    }else {
    exercises.splice(exerciseIndex, 1);
    document.getElementById('wt').remove();
    alert('Weight training deleted.')
  }}
}

function removeSu() {
  const exerciseIndex = exercises.indexOf('Sit ups');
  if (confirm('Wanna delete Sit ups?')) {
    if (exercises.length<=0) {
    alert('Plese add your exercise list first')
  } else {
    exercises.splice(exerciseIndex, 1);
    document.getElementById('su').remove();
    alert('Sit ups deleted.')
  }}
}

function removePu() {
  const exerciseIndex = exercises.indexOf('Push Ups');
  if (confirm('Wanna delete Push ups?')) {
    if (exercises.length<=1) {
    alert('Plese add your exercise list first')
  } else {
    exercises.splice(exerciseIndex, 1);
    document.getElementById('pu').remove();
    alert('Push ups deleted.')
  }}
}

function removeJog() {
  const exerciseIndex = exercises.indexOf('Jogging');
  if (confirm('Wanna delete Jogging?')) {
    if (exercises.length<=1) {
    alert('Plese add your exercise list first')
  }else {
    exercises.splice(exerciseIndex, 1);
    document.getElementById('jog').remove();
    alert('Jogging deleted.')
  }}
}

function removeChu() {
  const exerciseIndex = exercises.indexOf('Chunches');
  if (confirm('Wanna delete Chunches?')) {
    if (exercises.length<=1) {
    alert('Plese add your exercise list first')
  } else {
    exercises.splice(exerciseIndex, 1);
    document.getElementById('chu').remove();
    alert('Chunches deleted.')
  }}
}

function removePl() {
  const exerciseIndex = exercises.indexOf('Plank');
  if (confirm('Wanna delete Plank?')) {
    if (exercises.length<=1) {
    alert('Plese add your exercise list first')
  }else {
    exercises.splice(exerciseIndex, 1);
    document.getElementById('pl').remove();
    alert('Plank deleted.')
  }}
}

function removeSp() {
  const exerciseIndex = exercises.indexOf('Side Plank');
  if (confirm('Wanna delete Side Plank?')) {
    if (exercises.length<=1) {
    alert('Plese add your exercise list first')
  } else {
    exercises.splice(exerciseIndex, 1);
    document.getElementById('sp').remove();
    alert('Side Plank deleted.')
  }}
}

function ezmode() {
  nofex = 10;
  document.getElementById('urmode').innerHTML = 'Your mode now : Easy'
  notlowthan = 1;

}
function normode() {
  nofex = 25;
  document.getElementById('urmode').innerHTML = 'Your mode now : Normal'
  notlowthan = 10;

}
function hardmode() {
  nofex = 45;
  document.getElementById('urmode').innerHTML = 'Your mode now : Hard'
  notlowthan = 20;
}