function focusOnHeroBlog() {
    const blogLink = document.querySelectorAll(".blog-yours");

    for (let i = 0; i < blogLink.length; i++) {
        blogLink[i].addEventListener("click", function () {
        document.querySelector(".btn, .fromHire").focus();
    });
    }

}

export { focusOnHeroBlog };