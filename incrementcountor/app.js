const counters = document.querySelectorAll(".counter")
counters.forEach(counter=>{
    counter.innerHTML='0'
    const updateCounter=()=>{
        const target = +counter.getAttribute("data-target")
        const start =+ counter.innerHTML
        const increment = target/200
        if(start<target){
            counter.innerText = `${Math.ceil(start+increment)}`
            setTimeout(updateCounter,1)
        }
        else{
            counter.innerText=target
        }
        console.log(target)

    }
    updateCounter()
})




