 const changeButton = document.querySelector("#changeButton");
 const h1 = document.querySelector("h1")
 changeButton.addEventListener("click", changeText)

 function changeText(e) {
    h1.textContent = "Goodbye World"
 }

