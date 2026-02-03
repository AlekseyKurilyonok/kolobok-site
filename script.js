let w = document.getElementById("winners")
console.log("обновляется")
fetch("https://noninherently-nonpsychologic-williams.ngrok-free.dev/fields/winners")
.then(r => {
    console.log("STATUS", r.status)
    console.log("TYPE", r.headers.get("content-type"))
    return r.text()
})
.then(data => {
    return alert(data)
    if ("text" in data){
        w.textContent = data.text;
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
