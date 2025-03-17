const difficulties = document.querySelector("#difficulties");
const category = document.querySelector("#kategoriju");
const namee = document.querySelector("#name");
const form = document.querySelector("form");
const quizContainer = document.querySelector("#quizContainer");
const question = document.querySelector("#question");
const end = document.querySelector("#end")
const endName = document.querySelector("#ime")
const brojPogodenihOdgovora = document.querySelector("span")
let countdown = 10;
const countdownText = document.querySelector("#countdown");
let easyCountdown = 15
let mediumCountdown = 10
let hardCountdown = 7
const answerTime = document.querySelector("#answerTime")

let correctAnswers = 0;
let currentIndex = 0;

const answerButtons = [
   document.querySelector("#answer1"),
   document.querySelector("#answer2"),
   document.querySelector("#answer3"),
   document.querySelector("#answer4")
];

document.querySelector("#btn").addEventListener("click", async (event) => {
   event.preventDefault();

   console.log("Odabrana težina:", difficulties.value);
   console.log("Odabrana kategorija:", category.value);
   console.log("Ime igrača:", namee.value);

   form.style.display = "none";
   quizContainer.style.display = "block";

   let kategorija = category.value.toLowerCase();
   let nivo = difficulties.value.toLowerCase();

   try {
      let response = await fetch(`https://the-trivia-api.com/v2/questions?limit=5&difficulties=${nivo}&categories=${kategorija}`);
      let data = await response.json();
      console.log("Podaci uspješno dohvaćeni:", data);

      prikaziPitanje(data);
   } catch (error) {
      console.error("Greška pri dohvaćanju podataka", error);
   }
});
function prikaziPitanje(data) {
   if (currentIndex >= data.length) {
       quizContainer.style.display = "none";
       end.style.display = "block";
       brojPogodenihOdgovora.textContent = `${correctAnswers}/${data.length}`;
       
       const timer = setInterval(() => {
           countdownText.textContent = countdown; 
           countdown--;
       
           if (countdown < 0) {
               clearInterval(timer); 
               location.reload(); 
           }
       }, 1000);
       
       return;
   }

   let pitanje = data[currentIndex];
   question.textContent = pitanje.question.text;

   let correctAnswer = pitanje.correctAnswer;
   let answers = [...pitanje.incorrectAnswers, correctAnswer];
   answers = shuffleArray(answers);

   let nivo = difficulties.value.toLowerCase();
   let timeLeft = nivo === "easy" ? 15 : nivo === "medium" ? 10 : 7;
   
   answerTime.textContent = timeLeft;  

   let timer = setInterval(() => {
       timeLeft--;
       answerTime.textContent = timeLeft;

       if (timeLeft === 0) {
           clearInterval(timer);
           answerButtons.forEach((btn) => {
               if (btn.textContent === correctAnswer) {
                   btn.style.backgroundColor = "green"; 
               }
           });

           setTimeout(() => {
               currentIndex++;
               prikaziPitanje(data);
           }, 1000);
       }
   }, 1000);

   answerButtons.forEach((button, index) => {
       button.textContent = answers[index];
       button.style.backgroundColor = "";
       button.onclick = () => {
           clearInterval(timer); 
           provjeriOdgovor(button, correctAnswer, data);
       };
   });
}


function provjeriOdgovor(button, correctAnswer, data) {
   if (button.textContent === correctAnswer) {
      button.style.backgroundColor = "green";
      correctAnswers++;
   } else {
      button.style.backgroundColor = "red";
   }
   answerButtons.forEach((btn) => {
      if (btn.textContent === correctAnswer) {
          btn.style.backgroundColor = "green"; 
      }
  });
  
   setTimeout(() => {
      currentIndex++;
      prikaziPitanje(data);
   }, 1000);
}

function shuffleArray(array) {
   for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
   }
   return array;
}

















