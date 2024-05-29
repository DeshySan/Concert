$(function () {
  var i = 0;

  $(".next").on("click", function () {
    console.log("printinh");
    i = i + 1;

    if (i == $(".slider").length) {
      i = 0;
    }

    var currentImg = $(".slider").eq(i);
    var prevImg = $(".slider").eq(i - 1);

    animateImage(prevImg, currentImg);
  });

  $(".previous").on("click", function () {
    if (i == 0) {
      prevImg = $(".slider").eq(0);
      i = $(".slider").length - 1;
      currentImg = $(".slider").eq(i);
    } else {
      i = i - 1;

      currentImg = $(".slider").eq(i);
      prevImg = $(".slider").eq(i + 1);
    }

    animateImageLeft(prevImg, currentImg);
  });

  function animateImageLeft(prevImg, currentImg) {
    currentImg.css({ left: "100%" });

    currentImg.animate({ left: "0%" }, 1000);
    prevImg.animate({ left: "-100%" }, 1000);
  }

  function animateImage(prevImg, currentImg) {
    currentImg.css({ left: "-100%" });

    currentImg.animate({ left: "0%" }, 1000);

    prevImg.animate({ left: "100%" }, 1000);
  }
});
