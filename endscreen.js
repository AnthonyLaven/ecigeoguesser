const finalScore = localStorage.getItem("finalScore"); //get the final score from the main page (it was put into localstorage) 

if (finalScore !== null) {
    document.getElementById("score").textContent = Math.round(finalScore);
}
