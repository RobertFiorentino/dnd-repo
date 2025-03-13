document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("img");

    images.forEach(img => {
        img.addEventListener("click", function () {
            let overlay = document.createElement("div");
            overlay.classList.add("lightbox-overlay");

            let fullImage = document.createElement("img");
            fullImage.src = img.src;
            overlay.appendChild(fullImage);

            document.body.appendChild(overlay);
            overlay.classList.add("visible");

            overlay.addEventListener("click", function () {
                overlay.classList.remove("visible");
                setTimeout(() => overlay.remove(), 300);
            });
        });
    });
});
