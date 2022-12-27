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

//copy to clipboard

document
  .getElementById("email-button")
  .addEventListener("click", copyToClipboard);

function copyToClipboard() {
  const emailCopy = document.querySelector("#email").textContent;

  document.addEventListener(
    "copy",
    function (e) {
      e.preventDefault();
      e.clipboardData.setData("text/plain", emailCopy);
    },
    true
  );
  document.execCommand("copy");
  console.log(emailCopy);
}

const emailCopy = document.querySelector("#email");
console.log(emailCopy);
