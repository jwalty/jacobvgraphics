let allPortfolioImages = document.querySelectorAll("#imagePortfolio > img");
let portfolioContainer = document.querySelector("#imagePortfolio");

allPortfolioImages.forEach((img) => {
    
    let imageContainer = document.createElement("div");
    let imageOverlay = document.createElement("div");

    imageContainer.classList.add("imageContainer");
    imageOverlay.classList.add("imageOverlay");
    imageContainer.appendChild(img);
    imageContainer.appendChild(imageOverlay);


    imageContainer.addEventListener('click',() => {
        window.open(img.src);
    });

    portfolioContainer.appendChild(imageContainer);
});