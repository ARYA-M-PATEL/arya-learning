const slides = document.querySelectorAll(".slide");
var counter = 0;

const totalSlides = slides.length;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
  if (counter > 0) {
    counter--;
    slideImage();

    // second method for infitity slider
    // counter = counter > 0 ? counter - 1 : totalSlides - 1;
    // slideImage();
  }
};
const goNext = () => {
  if (counter < totalSlides - 1) {
    counter++;
    slideImage();
  }

  // second method for infitity slider
  // counter = (counter + 1) % totalSlides;
  // slideImage();
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

// setInterval(goNext, 3000);
