const soon = document.getElementById("text")
const back = document.getElementById("back")

back.addEventListener("click", () => {
    window.location.replace("index.html")
})

fetch("https://voluminous-nerte-sofaknight-5a685afe.koyeb.app/kolobok-serverAPI/fields/soon")
.then(r => r.json())
.then(data => {
    if("message" in data){
        alert(data.message)
    } else{
        soon.textContent = data.text
    }
})
