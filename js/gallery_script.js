document.addEventListener("click", function (e) {
    if (e.target.classList.contains("gallery-item")) {
        const item_src = e.target.getAttribute("src");
        const modal_image = document.querySelector(".modal-image");
        modal_image.src = item_src;

        var myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
        document.getElementById("gallery-modal-label").innerText = e.target.getAttribute("alt");
        myModal.show();
    }
});
