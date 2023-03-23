// Get all the cards using the class selector
const cards = document.querySelectorAll('.card');

// Loop through all the cards
cards.forEach(card => {
  // Get the image and the description elements within the card
  const image = card.querySelector('img');
  const description = card.querySelector('.img-description');
  
  // Set up a mouseover event listener on the image
  image.addEventListener('mouseover', () => {
    // Change the text in the description when the mouse is over the image
    description.textContent = 'John Doe was in TTU btween 2018-2019, he graduated with a degree in Analytical Chemistry.';
  });
  
  // Set up a mouseout event listener on the image
  image.addEventListener('mouseout', () => {
    // Change the text back to the original when the mouse is out of the image
    description.textContent = 'John Doe';
  });
});
