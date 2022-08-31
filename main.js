btnPrev = document.querySelector("#prev")
btnNext = document.querySelector("#next")
let slideIndex = 1;
let totalSlides = 4;
// let img1 = document.getElementById("img0")
// let img2 = document.getElementById("img1")
// let img3 = document.getElementById("img2")
// let img4 = document.getElementById("img3")
function nextSlide(){
    document.getElementById("img" + slideIndex).classList.remove("current");
    slideIndex += 1
    document.getElementById("img" + slideIndex).classList.add("current");
    if(slideIndex != 4){
        btnNext.disabled = false;
    }
    else{
        btnNext.disabled = true;
    }

    // let arr = new Array(img1, img2, img3, img4)
    // arr.indexOf("img" + slideIndex).classList.remove("current")
    // slideIndex += 1
    // arr.indexOf("img" + slideIndex).classList.add("current")
}
function prevSlide(){
    document.getElementById("img" + totalSlides).classList.remove("current");
    totalSlides -= 1
    document.getElementById("img" + totalSlides).classList.add("current");
    if(totalSlides != 1){
        btnPrev.disabled = false;
    }
    else{
        btnPrev.disabled = true;
    }
}

btnNext.addEventListener("click", nextSlide)
btnPrev.addEventListener("click", prevSlide)
