const difficulties = document.querySelector("#difficulties");
const kategoriju = document.querySelector("#kategoriju");
const namee= document.querySelector("#name")



document.querySelector("#btn").addEventListener("click", (event) => {
   event.preventDefault();
   console.log("Odabrana težina:", difficulties.value);
   console.log("Odabrana kategorija:", kategoriju.value);
   console.log("Ime igraca:", namee.value);
   
})




console.log("pcoetak")
let geographyHard = async () => {
   try {
      let response = await fetch("https://the-trivia-api.com/v2/questions?limit=5&difficulties=hard&categories=geography")
      let data = await response.json()
      console.log("hard", data);
      
   } catch (error) {
      console.error("Gresla", error);
   }
}

let geographyEasy = async () => {
   try {
      let response = await fetch("https://the-trivia-api.com/v2/questions?limit=5&difficulties=easy&categories=geography")
      let data = await response.json()
      console.log("easy", data);
      
   } catch (error) {
      console.error("Gresla", error);
   }
}
let geographyMedium = async () => {
   try {
      let response = await fetch("https://the-trivia-api.com/v2/questions?limit=5&difficulties=medium&categories=geography")
      let data = await response.json()
      console.log("medium", data);
      
   } catch (error) {
      console.error("Gresla", error);
   }
}

geographyHard()
geographyMedium()
geographyEasy()

let scienceHard = async () => {
   try {
      let response = await fetch("https://the-trivia-api.com/v2/questions?limit=5&difficulties=hard&categories=science")
      let data = await response.json()
      console.log("scienceHard", data);
      
   } catch (error) {
      console.error("Gresla", error);
   }
}
let scienceMedium = async () => {
   try {
      let response = await fetch("https://the-trivia-api.com/v2/questions?limit=5&difficulties=medium&categories=science")
      let data = await response.json()
      console.log("scienceMedium", data);
      
   } catch (error) {
      console.error("Gresla", error);
   }
}
let scienceEasy = async () => {
   try {
      let response = await fetch("https://the-trivia-api.com/v2/questions?limit=5&difficulties=easy&categories=science")
      let data = await response.json()
      console.log("scienceEasy", data);
      
   } catch (error) {
      console.error("Gresla", error);
   }
}
scienceHard()
scienceMedium()
scienceEasy()
let film_and_tvHard = async () => {
   try {
      let response = await fetch("https://the-trivia-api.com/v2/questions?limit=5&difficulties=hard&categories=film_and_tvHard")
      let data = await response.json()
      console.log("film_and_tvHard", data);
      
   } catch (error) {
      console.error("Gresla", error);
   }
}
let film_and_tvMedium = async () => {
   try {
      let response = await fetch("https://the-trivia-api.com/v2/questions?limit=5&difficulties=medium&categories=film_and_tvHard")
      let data = await response.json()
      console.log("film_and_tvMedium", data);
      
   } catch (error) {
      console.error("Gresla", error);
   }
}
let film_and_tvEasy = async () => {
   try {
      let response = await fetch("https://the-trivia-api.com/v2/questions?limit=5&difficulties=easy&categories=film_and_tvHard")
      let data = await response.json()
      console.log("film_and_tvEasy", data);
      
   } catch (error) {
      console.error("Gresla", error);
   }
}

film_and_tvHard()
film_and_tvMedium()
film_and_tvEasy()

