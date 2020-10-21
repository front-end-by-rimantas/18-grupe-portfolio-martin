function imgHover() {
    const blogsImgs = document.querySelectorAll(".imghover");
    for (let i = 0; i < blogsImgs.length; i++) {
        blogsImgs[i].addEventListener("mouseover", function () {
            blogsImgs[i].style.transform = "scale(1.1)",
            blogsImgs[i].style.overflow = "hidden";
            console.log('kaka'); 
        });
        blogsImgs[i].addEventListener("mouseleave", function () {
            blogsImgs[i].style.transform = "";
            console.log('lala'); 
        });
    }
    
}
export { imgHover };