let w = document.getElementById("winners")
fetch("https://noninherently-nonpsychologic-williams.ngrok-free.dev/fields/winners")
.then(r => r.json())
.then(data => {
    if ("text" in data){
        console.log(data.text)
        w.textContent = data.text;
        console.log(w.textContent)
    } else if ("message" in data) {
        alert(data.message)
    }
})
let st = document.getElementById("stories")
let fan = document.getElementById("fan")
let soon = document.getElementById("soon")
st.addEventListener("click", () => {
    window.location.replace(`stories.html?name=${encodeURIComponent("orig")}`)
})
fan.addEventListener("click", () => {
    window.location.replace(`stories.html?name=${encodeURIComponent("fan")}`)
})
soon.addEventListener("click", () => {
    window.location.replace(`soon.html`)
})
