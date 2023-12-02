
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.classList.add('black');
    } else {
        nav.classList.remove('black');
    }
});

const initialSlider = () => {
    const slidebuttons = document.querySelectorAll(".slider-wrapper .direction-btn");
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth
    slidebuttons.forEach((buttons) => {
        buttons.addEventListener("click", () => {
            const direction = buttons.id === "prev" ? -1 : 1;
            const scrollAmt = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmt, behavior: "smooth" })
        })
    })

    const handleSlideButton = () => {
        slidebuttons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block"
        slidebuttons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block"
    }

    imageList.addEventListener("scroll", () => {
        handleSlideButton()
    })
}

window.addEventListener('load', initialSlider)


