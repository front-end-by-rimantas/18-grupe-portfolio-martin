function focusOnHeroImg() {
    const blogImg = document.querySelectorAll(".imghover");

    for (let i = 0; i < blogImg.length; i++) {
        blogImg[i].addEventListener("click", function () {
        document.querySelector(".btn, .fromHire").focus();
    });
    }

}

export { focusOnHeroImg };