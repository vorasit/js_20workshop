const scrollBtn = document.querySelector(".top")
const rootEl = document.documentElement

document.addEventListener("scroll",showBtn)

scrollBtn.addEventListener("click",scrollToTopFunc)

function showBtn(){
    console.log("กำลังเลื่อน")
    const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight
    console.log(rootEl.scrollTop/scrollTotal)
    if(rootEl.scrollTop/scrollTotal > 0.3)
    {
        scrollBtn.classList.add("show-btn")
    }
    else
    {
        scrollBtn.classList.remove("show-btn")
    }

}

function scrollToTopFunc(){
    rootEl.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}