const polaroid = document.querySelector('.polaroid');
const decorations = document.querySelectorAll('.decorations img');

polaroid.addEventListener('mouseover', () => {
  polaroid.classList.add('animate');
});

polaroid.addEventListener('mouseout', () => {
  polaroid.classList.remove('animate');
});

decorations.forEach((img) => {
  img.addEventListener('mouseover', () => {
    img.classList.add('animate');
  });

  img.addEventListener('mouseout', () => {
    img.classList.remove('animate');
  });
});

const card = document.querySelector('.card');

card.addEventListener('mouseover', () => {
  card.classList.add('animate');
});

card.addEventListener('mouseout', () => {
  card.classList.remove('animate');
});
