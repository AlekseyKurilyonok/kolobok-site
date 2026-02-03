let names = []
const main = document.getElementById("main")
const params = new URLSearchParams(window.location.search)
const nam = params.get("name")
const back = document.getElementById("back")
fetch(`https://employment-stripes-screening-compression.trycloudflare.com/stories/${nam}`)
.then(r => r.json())
.then(data => {
    if ('message' in data){
        alert(data.message)
    }
    else if ("names" in data){
        names = data.names
    }
    const cop = document.getElementById("copy")
    names.forEach(element => {
        const but = cop.content.cloneNode(true)
        const button = but.querySelector(".story")
        const text = button.querySelector(".text")
        text.textContent = element
        button.addEventListener("click", () => {
            const params = new URLSearchParams({
            origi: nam,
            name: element
            })

            window.location.replace(`story.html?${params.toString()}`)
        })
        main.prepend(but)
    });
})

back.addEventListener("click", () => {
    window.location.replace(`index.html`);
})
