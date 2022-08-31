const container = document.querySelector(".container")
const row = 2
const cols = 3

function randomNumber(){
    return Math.floor(Math.random()*500)
}

for (let i = 0; i < row*cols; i++) {
    console.log(randomNumber())
    //ภาพ
    const url = `https://source.unsplash.com/random/${randomNumber()}`
    const imageEl = document.createElement("img")
    imageEl.src=url
    container.appendChild(imageEl)
}
