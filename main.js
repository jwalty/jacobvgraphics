let allPortfolioLinks = document.querySelectorAll("#imagePortfolio > a");

allPortfolioLinks.forEach((link) => {
    let image = document.createElement('img');
    image.setAttribute('src',link.getAttribute('href'));
    link.appendChild(image);
});
