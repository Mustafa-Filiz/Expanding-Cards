const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");
const img4 = document.querySelector(".img4");
const img5 = document.querySelector(".img5");

img1.onclick = () => {
    img2.classList.remove("open");
    img3.classList.remove("open");
    img4.classList.remove("open");
    img5.classList.remove("open");
    img1.classList.add("open");
}
img2.onclick = () => {
    img1.classList.remove("open");
    img3.classList.remove("open");
    img4.classList.remove("open");
    img5.classList.remove("open");
    img2.classList.add("open");
}
img3.onclick = () => {
    img2.classList.remove("open");
    img1.classList.remove("open");
    img4.classList.remove("open");
    img5.classList.remove("open");
    img3.classList.add("open");
}
img4.onclick = () => {
    img2.classList.remove("open");
    img3.classList.remove("open");
    img1.classList.remove("open");
    img5.classList.remove("open");
    img4.classList.add("open");
}
img5.onclick = () => {
    img2.classList.remove("open");
    img3.classList.remove("open");
    img4.classList.remove("open");
    img1.classList.remove("open");
    img5.classList.add("open");
}