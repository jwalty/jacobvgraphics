let allPortfolioImages = document.querySelectorAll("#imagePortfolio > img");
let portfolioContainer = document.querySelector("#imagePortfolio");

console.log(allPortfolioImages);

allPortfolioImages.forEach((img) => {
    
    let imageContainer = document.createElement("div");
    let imageOverlay = document.createElement("div");
    let overlayText = document.createElement("div");

    imageContainer.classList.add("imageContainer");
    imageOverlay.classList.add("imageOverlay");
    
    imageContainer.appendChild(img);
    imageContainer.appendChild(imageOverlay);
    

    portfolioContainer.appendChild(imageContainer);
});