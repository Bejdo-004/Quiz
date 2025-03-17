const difficulties = document.querySelector("#difficulties");
const category = document.querySelector("#kategoriju");
const namee = document.querySelector("#name")
const form = document.querySelector("form")
const quizContainer = document.querySelector("#quizContainer")
const question = document.querySelector("#question")
let correctAnswers = 0
let currentQuestions = [];
let currentIndex = 0;


document.querySelector("#btn").addEventListener("click", (event) => {
   event.preventDefault();
   console.log("Odabrana težina:", difficulties.value);
   console.log("Odabrana kategorija:", category.value);
   console.log("Ime igraca:", namee.value);

   form.style.display = "none"
   quizContainer.style.display = "block";
   let categoryDifficultie = category.value.toLowerCase() + "_" + difficulties.value
   console.log(categoryDifficultie);



   let fetchingData = async (category, difficulties) => {
      let kategorija = category.value.toLowerCase()
      let nivo = difficulties.value.toLowerCase()
      try {
         let response = await fetch(`https://the-trivia-api.com/v2/questions?limit=5&difficulties=${nivo}&categories=${kategorija}`)
         let data = await response.json()
         console.log("USPIOOOOOO", data);
      
         question.textContent = data[currentIndex].question.text

         let correctAnswer = data[currentIndex].correctAnswer
         let wrongAnswers = data[currentIndex].incorrectAnswers
         console.log("wrooooooooooong", wrongAnswers);
         let currentAnswers = wrongAnswers
         currentAnswers.push(correctAnswer)
         console.log(currentAnswers);
         /////izmjesatii cuurentAnswers onda kroz for petlju svakom buttonu dodati jedani answer kada klikne na button provjeriti da li se slaze sa correctAnswerom ako da  onda ga pozeleniti i dodati na correctAnswers++ 
         // zatim na klik naporaviti za sledece pitanje  kada se sve zavrsi ispisati ime ispisati broj pogodenih, onda dodati tajmer i urediti css
         
      }
      catch (error) {
         console.error("Gresla", error);
      }

   }
   fetchingData(category,difficulties)
});
























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

