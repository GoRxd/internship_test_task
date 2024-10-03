document.addEventListener("click", function (e) {
    if (e.target.classList.contains("learn-more")) {

        var feature_modal = document.getElementById("feature-modal");
        feature_modal.querySelector(".description-text").innerText = e.target.getAttribute("learn-more-content");
        console.log(e.target.parentElement);
        var feature_title = e.target.parentElement.querySelector(".feature-title").innerHTML;

        var myModal = new bootstrap.Modal(document.getElementById('feature-modal'));
        document.getElementById("feature-modal-label").innerHTML = `${feature_title}`
        myModal.show();
    }
});
