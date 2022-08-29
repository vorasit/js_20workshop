const container = document.getElementById("container")
const getCountries = async()=>{
    const url='https://restcountries.com/v2/all'
    const res = await fetch(url)
    const items = await res.json()
    items.forEach(element =>{
        console.log("ชื่อ = ",element.name," เมืองหลวง = ",element.capital)
        createCard(element)
    });
    
}

const createCard =(data)=>{
    const cardEl = document.createElement("div")
    cardEl.classList.add("country")
    const contentHTML=`
        <div class="img-container">
            <img src="${data.flag}"/>
        </div>
        <div class="info">
            <h3>${data.name}</h3>
            <small>เมืองหลวง : <span>${data.capital}</span></small>
        </div>
    `
    cardEl.innerHTML=contentHTML
    container.appendChild(cardEl)
}

getCountries()