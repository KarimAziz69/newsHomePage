const menuButton = document.querySelector('.navbar-toggler');
const linksMenu = document.querySelector('.navbar-collapse');

menuButton.addEventListener('click', () => {
  linksMenu.classList.toggle('show');
});

const title = document.getElementsByClassName('tBFOW')[0];
title.style.fontWeight= "bold"; title.style.textTransform= "capitalize";
title.innerHTML="the bright <br> future of <br> web 3.0?"

const buttonRead= document.getElementsByClassName('btn')[0];
buttonRead.style.backgroundColor="#f45951"; buttonRead.style.textTransform="uppercase";
buttonRead.style.fontSize="12px"; buttonRead.style.fontWeight="bold";
buttonRead.style.letterSpacing="2px";  buttonRead.style.padding="12px 28px";

buttonRead.addEventListener("mouseover", function() {
  buttonRead.style.backgroundColor = "#0f0020";
});

buttonRead.addEventListener("mouseout", function() {
  buttonRead.style.backgroundColor = "#f45951";
});

openLink = () => {
  window.location.href="https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl/hub";
}
const imageSource= document.getElementsByClassName('imgs')[0];
const imageSourceL = 'imgs/image-web-3-desktop.jpg';
const imageSourceS = 'imgs/image-web-3-mobile.jpg';

updateImage = () => {
  const windowWidth = window.innerWidth;

  if (windowWidth <= 680) {
    imageSource.src = imageSourceS;
  } else {
    imageSource.src = imageSourceL;
    }
}
updateImage();
window.addEventListener('resize', updateImage);


const titleSelection = document.querySelectorAll('.articles h2');
titleSelection.forEach(h2 => {
  h2.addEventListener('mouseover', () => {
    h2.style.color = '#eb5f4d';
  });
});
titleSelection.forEach(h2 => {
  h2.addEventListener('mouseout', () => {
    h2.style.color = '';
  });
});



const titleSelection01 = document.querySelectorAll('.articles h2')[0];
const titleSelection02 = document.querySelectorAll('.articles h2')[1];
const titleSelection03 = document.querySelectorAll('.articles h2')[2];

titleSelection01.addEventListener('click', () => {
  window.location.href="#"
})
titleSelection02.addEventListener('click', () => {
  window.location.href="#"
})
titleSelection03.addEventListener('click', () => {
  window.location.href="#"
})