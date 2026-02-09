const params = new URLSearchParams(window.location.search)
const origi = params.get("origi")
const nam = params.get("name")
const title = document.getElementById("name")
const story = document.getElementById("story")
const main = document.querySelector("main")
const back = document.getElementById("back")

back.addEventListener("click", () => {
    window.location.replace(`stories.html?name=${encodeURIComponent(origi)}`);
})


if (nam){
    fetch(`https://kolobok-server-production.up.railway.app/stories/${origi}/${nam}`)
    .then(r => r.json())
    .then(data => {
        if ("message" in data){
            alert(data.message)
        }
        else{
            title.textContent = data.name
            story.textContent = data.story
        }
    })
}
