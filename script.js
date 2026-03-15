const images = document.querySelectorAll(".grid img")
const viewer = document.getElementById("viewer")
const viewerImg = document.getElementById("viewer-img")

images.forEach(img=>{
img.addEventListener("click",()=>{
viewer.style.display="flex"
viewerImg.src=img.src
})
})

viewer.addEventListener("click",()=>{
viewer.style.display="none"
})

const toggle=document.getElementById("themeToggle")

toggle.onclick=()=>{
document.body.classList.toggle("dark")
}
