const difficulties = document.querySelector("#difficulties");
const category = document.querySelector("#kategoriju");
const namee = document.querySelector("#name");
const form = document.querySelector("form");
const quizContainer = document.querySelector("#quizContainer");
const question = document.querySelector("#question");
const end = document.querySelector("#end");
const brojPogodenihOdgovora = document.querySelector("span");
const countdownText = document.querySelector("#countdown");
const answerTime = document.querySelector("#answerTime");
const endName = document.querySelector("h4")
let easyCountdown = 20;
let mediumCountdown = 15;
let hardCountdown = 12;
let countdown = 10;
let correctAnswers = 0;
let currentIndex = 0;

const answerButtons = [
  document.querySelector("#answer1"),
  document.querySelector("#answer2"),
  document.querySelector("#answer3"),
  document.querySelector("#answer4"),
];

document.querySelector("#btn").addEventListener("click", async (event) => {
  event.preventDefault();
  if (!category.value || !difficulties.value || !namee.value) {
    alert("Molimo da popunite sva polja");
    return;
  }

 

  form.style.display = "none";

  let kategorija = category.value.toLowerCase();
  let nivo = difficulties.value.toLowerCase();

  try {
    let response = await fetch(
      `https://the-trivia-api.com/v2/questions?limit=5&difficulties=${nivo}&categories=${kategorija}`
    );
    let data = await response.json();

    quizContainer.style.display = "block";
    prikaziPitanje(data);
  } catch (error) {
    console.error("Greška pri dohvaćanju podataka", error);
    alert("Greska na serveru. Samo lagano, ubrzo cete biti vraceni na pocetnu stranicu")
    
    const timer = setInterval(() => {
      countdownText.textContent = countdown;
      countdown--;

      if (countdown < 0) {
        clearInterval(timer);
        location.reload();
      }
    }, 100);
    
  }
});
function prikaziPitanje(data) {
  if (currentIndex >= data.length) {
    quizContainer.style.display = "none";
    end.style.display = "block";
    endName.style.fontSize = "25px"
    endName.textContent = namee.value
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
  let timeLeft = nivo === "easy" ? easyCountdown : nivo === "medium" ? mediumCountdown : hardCountdown;

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
    answerButtons.forEach(btn => btn.disabled = true )
  } else {
    button.style.backgroundColor = "red";
    answerButtons.forEach(btn => btn.disabled = true )
  }
  answerButtons.forEach((btn) => {
    if (btn.textContent === correctAnswer) {
      btn.style.backgroundColor = "green";
    }
  });

  setTimeout(() => {
    answerButtons.forEach(btn => btn.disabled = false )
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



