const soon = document.getElementById("text")
const back = document.getElementById("back")

back.addEventListener("click", () => {
    window.location.replace("index.html")
})

fetch("https://noninherently-nonpsychologic-williams.ngrok-free.dev/fields/soon")
.then(r => r.json())
.then(data => {
    if("message" in data){
        alert(data.message)
    } else{
        soon.textContent = data.text
    }
})
