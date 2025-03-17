const difficulties = document.querySelector("#difficulties");
const category = document.querySelector("#kategoriju");
const namee = document.querySelector("#name");
const form = document.querySelector("form");
const quizContainer = document.querySelector("#quizContainer");
const question = document.querySelector("#question");

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
    if (currentIndex >= data.length) {////////////////////////////////////////////////////////////////////
        alert(`Kviz završen! Tačni odgovori: ${correctAnswers}/${data.length}`);
        location.reload();
        return;
    }

    let pitanje = data[currentIndex];
    question.textContent = pitanje.question.text;

    let correctAnswer = pitanje.correctAnswer;
    let answers = [...pitanje.incorrectAnswers, correctAnswer]; 
    answers = shuffleArray(answers);

    answerButtons.forEach((button, index) => {
        button.textContent = answers[index];
        button.style.backgroundColor = ""; 
        button.onclick = () => provjeriOdgovor(button, correctAnswer, data);
    });
}

function provjeriOdgovor(button, correctAnswer, data) {
    if (button.textContent === correctAnswer) {
        button.style.backgroundColor = "green";
        correctAnswers++;
    } else {
        button.style.backgroundColor = "red";
    }

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




















console.log("pcoetak")
let geography_Hard = async () => {
   try {
      let response = await fetch("https://the-trivia-api.com/v2/questions?limit=5&difficulties=hard&categories=geography")
      let data = await response.json()
      console.log("hard", data);

   } catch (error) {
      console.error("Gresla", error);
   }
}

let geography_Easy = async () => {
   try {
      let response = await fetch("https://the-trivia-api.com/v2/questions?limit=5&difficulties=easy&categories=geography")
      let data = await response.json()
      console.log("easy", data);

   } catch (error) {
      console.error("Gresla", error);
   }
}
let geography_Medium = async () => {
   try {
      let response = await fetch("https://the-trivia-api.com/v2/questions?limit=5&difficulties=medium&categories=geography")
      let data = await response.json()
      console.log("medium", data);

   } catch (error) {
      console.error("Gresla", error);
   }
}

geography_Hard()
geography_Medium()
geography_Easy()

let science_Hard = async () => {
   try {
      let response = await fetch("https://the-trivia-api.com/v2/questions?limit=5&difficulties=hard&categories=science")
      let data = await response.json()
      console.log("scienceHard", data);

   } catch (error) {
      console.error("Gresla", error);
   }
}
let science_Medium = async () => {
   try {
      let response = await fetch("https://the-trivia-api.com/v2/questions?limit=5&difficulties=medium&categories=science")
      let data = await response.json()
      console.log("scienceMedium", data);

   } catch (error) {
      console.error("Gresla", error);
   }
}
let science_Easy = async () => {
   try {
      let response = await fetch("https://the-trivia-api.com/v2/questions?limit=5&difficulties=easy&categories=science")
      let data = await response.json()
      console.log("scienceEasy", data);

   } catch (error) {
      console.error("Gresla", error);
   }
}
science_Hard()
science_Medium()
science_Easy()
let sport_Hard = async () => {
   try {
      let response = await fetch("https://the-trivia-api.com/v2/questions?limit=5&difficulties=hard&categories=sport")
      let data = await response.json()
      console.log("sportHard", data);

   } catch (error) {
      console.error("Gresla", error);
   }
}
let sport_Medium = async () => {
   try {
      let response = await fetch("https://the-trivia-api.com/v2/questions?limit=5&difficulties=medium&categories=sport")
      let data = await response.json()
      console.log("sportMedium", data);

   } catch (error) {
      console.error("Gresla", error);
   }
}
let sport_Easy = async () => {
   try {
      let response = await fetch("https://the-trivia-api.com/v2/questions?limit=5&difficulties=easy&categories=sport")
      let data = await response.json()
      console.log("sportEasy", data);

   } catch (error) {
      console.error("Gresla", error);
   }
}

sport_Hard()
sport_Medium()
let cs = sport_Easy()
setTimeout((console.log("asdasdads", cs)), 2000)

