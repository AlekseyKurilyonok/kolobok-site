let w = document.getElementById("winners")
fetch("https://employment-stripes-screening-compression.trycloudflare.com/fields/winners")
.then(r => r.json())
.then(data => {
    if ("text" in data){
        w.textContent = data.text
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
