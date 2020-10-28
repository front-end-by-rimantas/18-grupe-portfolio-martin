function imgHover() {
    const blogsImgs = document.querySelectorAll(".imghover");
    for (let i = 0; i < blogsImgs.length; i++) {
        blogsImgs[i].addEventListener("mouseover", function () {
            blogsImgs[i].style.transform = "scale(1.1)",
            blogsImgs[i].style.overflow = "hidden";
        });
        blogsImgs[i].addEventListener("mouseleave", function () {
            blogsImgs[i].style.transform = "";
        });
    }
}
export { imgHover };