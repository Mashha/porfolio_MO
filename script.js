//mobile nav
const navSlide = () => {
  const navigation = document.querySelector(".list-items");
  const burgerMenu = document.querySelector(".burger-menu");

  burgerMenu.addEventListener("click", function () {
    navigation.classList.toggle("active");
    burgerMenu.classList.toggle("toggle");
  });
};

navSlide();
