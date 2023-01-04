//mobile nav
const navSlide = () => {
  const navigation = document.querySelector(".list-items");
  const burgerMenu = document.querySelector(".burger-menu");

  burgerMenu.addEventListener("click", function () {
    navigation.classList.toggle("active");
    burgerMenu.classList.toggle("toggle");
  });
  navigation.addEventListener("click", function(){
   navigation.classList.remove("active")
   burgerMenu.classList.remove("toggle")
  })
};

navSlide();

//copy to clipboard

document
  .getElementById("email-button")
  .addEventListener("click", copyToClipboard);

function copyToClipboard() {
  const emailCopy = document.querySelector("#email").textContent;
  document.querySelector(".message").style.opacity = 1;
  document.addEventListener(
    "copy",
    function (e) {
      e.preventDefault();
      e.clipboardData.setData("text/plain", emailCopy);
    },
    true
  );
  //document.execCommand("copy");
  navigator.clipboard.writeText(emailCopy);

  setTimeout(() => {
    document.querySelector(".message").style.opacity = 0;
  }, 1000);
}

const emailCopy = document.querySelector("#email");

//slide in on scroll
const box = document.querySelector(".left")

window.addEventListener("scroll", checkBoxes)
// where is the trigger point
function checkBoxes(){
  const fadeIn = window.innerHeight / 5 * 3

  const boxTop = box.getBoundingClientRect().top
  if(boxTop < fadeIn){
    box.classList.add("show")
  } else {
    box.classList.remove("show")
  }
}

