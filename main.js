//Hamburger menu for responsive design
function hamBurger() {
  let noShow = document.getElementById("wideScreen");
  let centerCross = document.getElementById("centerCross");
  if (noShow.style.display == "flex") {
    noShow.style.display = "none";
  } else {
    noShow.style.display = "flex";
    centerCross.style.justifyContent = "center";
    centerCross.style.color = "red";
  }
}
//Scrolling to Top

function Top() {
  $(" html, body").animate(
    {
      scrollTop: "0px",
    },
    800
  );
}
