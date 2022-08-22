window.onscroll = ()=> scrollProgress()
const progressEl = document.querySelector(".progress")
function scrollProgress(){
    console.log("เลื่อนดูเนื้อหา")
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrollTop = document.documentElement.scrollTop
    const scrollpercentage = (scrollTop/pageHeight)*100
    console.log(scrollpercentage+"%")

    progressEl.style.visibility="visible"
    progressEl.style.width = scrollpercentage+"%"

}