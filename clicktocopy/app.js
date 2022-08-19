const btn = document.querySelector(".btn")
const coupon = document.querySelector(".coupon")

btn.addEventListener("click",(e)=>{
    console.log("เริ่มต้นคัดลอกข้อความ")
    coupon.select()
    coupon.setSelectionRange(0,999999)
    navigator.clipboard.writeText(coupon.value)
    btn.textContent="คัดลอกคูปองแล้ว"
    setTimeout(()=>{
        btn.textContent="คัดลอก"
    },3000)
})