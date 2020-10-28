function focusOnHero() {
    const hireMeBtn = document.querySelector(".btn-white");
    hireMeBtn.addEventListener("click", function () {
        document.querySelector(".btn, .fromHire").focus();
    });
}

export { focusOnHero };