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
    random = Math.floor(Math.random())
}
if (random2==0) {
    random2 = Math.floor(Math.random())
}
if (random3==0) {
    random3 = Math.floor(Math.random())
}

document.getElementById('Quest1').innerHTML = exercise
document.getElementById('Quest1n').innerHTML = random
document.getElementById('Quest2').innerHTML = exercise2
document.getElementById('Quest2n').innerHTML = random2
document.getElementById('Quest3').innerHTML = exercise3
document.getElementById('Quest3n').innerHTML = random3
} 
function showboard() {
  
}
