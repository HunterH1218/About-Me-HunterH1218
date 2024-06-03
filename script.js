document.addEventListener('DOMContentLoaded', (event) => {
    // Replace the text in the header's paragraph with an image
    const headerImage = document.createElement('img');
    headerImage.src = 'banner.jpg';  // replace with your image's path
    headerImage.alt = 'banner';
    
    const headerParagraph = document.querySelector('header > p');
    if (headerParagraph) {
        headerParagraph.replaceWith(headerImage);
    }
});